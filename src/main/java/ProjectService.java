import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;
import org.apache.commons.lang3.StringEscapeUtils;
/**
 * Created by liaokaien on 3/29/16.
 */
public class ProjectService {

    public String constructXMLString(List<Project> projects, UUID sessionId){
        XMLService xmlUtil = new XMLService();
        String xmlDoc = "";
        Project[] projectsArray =  projects.toArray(new Project[projects.size()]);
        try{
            DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
            Document doc = docBuilder.newDocument();
            Element rootElement = doc.createElement("Projects");
            Element project;
            xmlUtil.addAttribute(doc, rootElement, "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
            doc.appendChild(rootElement);
            for(int i = 0; i < projectsArray.length; i++){
                project = doc.createElement("Project");
                HashMap projectProps = projectsArray[i].getProjectData();
                // Extract related user data;
                HashMap driverData   = (HashMap) projectProps.get("driverData");
                HashMap observerData = (HashMap) projectProps.get("observerData");
                UUID driverId = (UUID)driverData.get("uid");
                UUID observerId = (UUID)observerData.get("uid");
                UUID related_uid;
                String type, related_uname;
                if( driverId == sessionId ){
                    related_uid = observerId;
                    related_uname = observerData.get("uname").toString();
                    type = "driver";
                }else {
                    related_uid = driverId;
                    related_uname = driverData.get("uname").toString();
                    type = "observer";
                }

                xmlUtil.addChildElement(doc, project, "related_uid", related_uid.toString());
                xmlUtil.addChildElement(doc, project, "related_uname", related_uname);
                xmlUtil.addChildElement(doc, project, "type", type);
                xmlUtil.addChildElement(doc, project, "name", projectProps.get("name").toString());
                xmlUtil.addAttribute(doc, project,"id", projectProps.get("project_id").toString());
                rootElement.appendChild(project);
            }
            try{
                TransformerFactory tf = TransformerFactory.newInstance();
                Transformer transformer = tf.newTransformer();
                StringWriter writer = new StringWriter();
                transformer.transform(new DOMSource(doc), new StreamResult(writer));
                xmlDoc = writer.getBuffer().toString().replaceAll("\n|\r", "");
            } catch (TransformerException e) {
                e.printStackTrace();
            }
        } catch (ParserConfigurationException pce){
            pce.printStackTrace();
        }
        try {
            xmlUtil.validate(xmlDoc, "src/main/resources/Project.xsd");
        } catch (SAXException e) {
            e.printStackTrace();
        }
        return xmlDoc;
    }
}
