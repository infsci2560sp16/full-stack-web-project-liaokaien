import java.util.*;

/**
 * Created by liaokaien on 3/22/16.
 */

public class UserService {

    private HashMap<String, Object> UserFact(int uid, String uname, String relation){
        HashMap<String, Object> user = new HashMap();
        user.put("uid",uid);
        user.put("uname", uname);
        user.put("relation", relation);
        return user;
    }

    public List<HashMap> search(String query){
        List<HashMap> searchResult = new ArrayList<>();
        searchResult.add(UserFact(213, query,null));
        searchResult.add(UserFact(205, "Mike", "friend"));
        return searchResult;
    }

    public List<Project> recentProject(UUID uid){
        List<Project> projectList = new ArrayList();
        User sessionUser = new User("Jeff", uid);
        User randomUser1 = new User("Steve");
        User randomUser2 = new User("John");
        Project example1 = new Project("Django", sessionUser, randomUser1);
        Project example2 = new Project("Flask", randomUser2, sessionUser);

        projectList.add(example1);
        projectList.add(example2);
        return projectList;
    }

    public List<Project> driverProject(UUID uid){
        List<Project> projectList = new ArrayList();
        User sessionUser = new User("Jeff", uid);
        User randomUser1 = new User("Steve");
        Project example1 = new Project("Django", sessionUser, randomUser1);
        projectList.add(example1);
        return projectList;
    }

    public List<Project> observerProject(UUID uid){
        List<Project> projectList = new ArrayList();
        User sessionUser = new User("Jeff", uid);
        User randomUser2 = new User("John");
        Project example2 = new Project("Flask", randomUser2, sessionUser);
        projectList.add(example2);
        return projectList;
    }


}
