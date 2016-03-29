/**
 * Created by liaokaien on 3/22/16.
 */

import static spark.Spark.*;
import com.google.gson.Gson;

import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import java.io.StringWriter;
import java.util.*;

import static spark.Spark.get;

public class UserController {

    public UserController(final UserService userService, final ProjectService projectService) {
        get("/search", (request, response) -> {
            Map<String, Object> attributes = new HashMap<>();
            List<HashMap> userList = userService.search(request.queryParams("q"));
            attributes.put("success", true);
            attributes.put("userList", userList);
            Gson gson = new Gson();
            String json = gson.toJson(attributes);
            return new ModelAndView(attributes, "search_result.ftl");
        }, new FreeMarkerEngine());

        get("/user/relation", (request, response) -> {
            List<User> relation = new ArrayList();
            // todo: add user's friend here;
            User example1 = new User("Tom");
            User example2 = new User("Jack");
            example1.setRelation("friend");
            example2.setRelation("friend");
            relation.add(example1);
            relation.add(example2);
            Gson gson = new Gson();
            String json = gson.toJson(relation);
            response.type("application/json");
            return  json;
        });

        get("/user/projects/:type", (request, response) -> {
            String listType = request.params(":type");
            List<Project> projects;
            UUID sessionId = UUID.randomUUID();
            switch (listType){
                case "driver":
                    projects = userService.driverProject(sessionId);
                    break;
                case "observer":
                    projects = userService.observerProject(sessionId);
                    break;
                case "recent":
                    projects = userService.recentProject(sessionId);
                    break;
                default:
                    projects = userService.recentProject(sessionId);
            }
            //todo: get attributes of each projects and return a XML document;
            response.type("application/xml");
            return projectService.constructXMLString(projects, sessionId);
        });

    }
}
