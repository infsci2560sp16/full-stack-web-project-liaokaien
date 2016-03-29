/**
 * Created by liaokaien on 3/28/16.
 */
import java.util.HashMap;
import java.util.UUID;
public class User {
    private UUID uid;
    private String uname;
    private String relation;

    public User(String uname){
        this.uname = uname;
        uid = UUID.randomUUID();
        relation = null;
    }

    public HashMap getUserData(){
        HashMap map = new HashMap();
        map.put("uid", this.uid);
        map.put("uname", this.uname);
        return map;
    }

    public void setRelation(String relation){
        this.relation = relation;
    }
}
