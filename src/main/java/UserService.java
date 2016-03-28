import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.HashMap;

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

    public List<Project> recentProject (String uid){
        HashMap<>
    }
}
