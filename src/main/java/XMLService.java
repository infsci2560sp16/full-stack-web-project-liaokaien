import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

import javax.xml.XMLConstants;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import javax.xml.validation.Validator;
import java.io.File;
import java.io.IOException;
import java.io.StringReader;

/**
 * Created by liaokaien on 3/29/16.
 */
public class XMLService {
    public void addChildElement(Document doc, Element targetElement, String tagName, String tagValue){
        Element tag = doc.createElement(tagName);
        tag.appendChild(doc.createTextNode(tagValue));
        targetElement.appendChild(tag);
    }

    public void addAttribute(Document doc, Element targetElement, String attrName, String attrValue){
        Attr attr = doc.createAttribute(attrName);
        attr.setValue(attrValue);
        targetElement.setAttributeNode(attr);
    }

    public boolean validate(String xmlDoc, String schemaPath) throws SAXException {
        SchemaFactory schemaFactory = SchemaFactory
                .newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
        Source schemaFile = new StreamSource(new File(schemaPath));
        Source xmlFile    = new StreamSource(new StringReader(xmlDoc));
        Schema schema = schemaFactory.newSchema(schemaFile);
        Validator validator = schema.newValidator();
        try {
            validator.validate(xmlFile);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

    }
}
