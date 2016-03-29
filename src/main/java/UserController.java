/**
 * Created by liaokaien on 3/22/16.
 */

import static spark.Spark.*;

import com.google.gson.Gson;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import java.util.*;

import static spark.Spark.get;

public class UserController {

    public UserController(final UserService userService) {
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

    }
}
