import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static spark.Spark.post;

/**
 * Created by liaokaien on 3/28/16.
 */
public class ProjectController {
    public ProjectController(){
        post("/project", (request, response) -> {
            Map<String, Object> attributes = new HashMap<>();
            String projectName = request.queryParams("project_name");
            // TODO:  Check if the project_name is duplicated;
            String observerId   = request.queryParams("observer_id");
            // TODO: retrieval observer's name from DB
            String observerName = "Tom";

            attributes.put("name", projectName);
            attributes.put("project_id", UUID.randomUUID());
            attributes.put("type", "driver");
            attributes.put("msg", "success");
            attributes.put("related_uname", observerName);
            attributes.put("related_uid", observerId);
            response.type("application/json");
            Gson gson = new Gson();
            return  gson.toJson(attributes);
        });
    }
}
