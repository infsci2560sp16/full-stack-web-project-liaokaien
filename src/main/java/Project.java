import java.util.HashMap;
import java.util.UUID;

/**
 * Created by liaokaien on 3/29/16.
 */
public class Project {
    private String projectName;
    private UUID projectId;
    private User driver;
    private User observer;


    public Project(String projectName, String type, User driver, User observer){
        this.projectName = projectName;
        this.observer = observer;
        this.driver = driver;
        this.projectId = UUID.randomUUID();
    }

    public HashMap getProjectData(){
        HashMap attributes = new HashMap();
        attributes.put("name", this.projectName);
        attributes.put("project_id", this.projectId);
        attributes.put("driverData", this.driver.getUserData());
        attributes.put("observerData", this.driver.getUserData());
        return attributes;
    }



}
