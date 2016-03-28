/**
 * Created by liaokaien on 3/22/16.
 */

import static spark.Spark.*;

import com.google.gson.Gson;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import static spark.Spark.get;
import java.util.UUID;

public class UserController {
    public UserController(final UserService userService){
        get("/search", (request, response) -> {
            Map<String, Object> attributes = new HashMap<>();
            List<HashMap> userList = userService.search(request.queryParams("q"));
            attributes.put("success", true);
            attributes.put("userList", userList);
            Gson gson = new Gson();
            String json = gson.toJson(attributes);
            return new ModelAndView(attributes, "search_result.ftl");
        }, new FreeMarkerEngine());

    }
}
