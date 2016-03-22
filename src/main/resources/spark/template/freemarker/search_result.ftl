<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link href="stylesheets/css/base.css" rel="stylesheet"/>
</head>
<body>
<!--Banner-View goes here-->
<nav id="app_banner"></nav>
<div id="user_list_wrap">
    <ol class="user_list">
    <#if success >
        <#list userList as user>
            <li class="user_list_item">
                <span class="list_item username">
                    <a href="/user_profile.html?uid=${user.uid}">${user.uname}</a>
                </span>
                <#if user.relation??>
                    <span class="list_item relation">${user.relation}</span>

                <#else>
                    <span class="list_item btn_add_friend">Add as friend</span>
                </#if>
            </li>
        </#list>
    <#else>
        <span class="error_msg align_center">Search result is empty.</span>
    </#if>
    </ol>
</div>
<!--************ Underscore Templates ****************-->
<script type="text/template" id="banner_template">
    <div id="site_logo">
        Logo
    </div>
    <div id="sign_out" class="banner_element">
        <svg class="svg-icon" viewBox="0 0 20 20">
            <path fill="none" d="M13.53,2.238c-0.389-0.164-0.844,0.017-1.01,0.41c-0.166,0.391,0.018,0.845,0.411,1.01c2.792,1.181,4.598,3.904,4.6,6.937c0,4.152-3.378,7.529-7.53,7.529c-4.151,0-7.529-3.377-7.529-7.529C2.469,7.591,4.251,4.878,7.01,3.683C7.401,3.515,7.58,3.06,7.412,2.67c-0.17-0.392-0.624-0.571-1.014-0.402c-3.325,1.44-5.472,4.708-5.47,8.327c0,5.002,4.069,9.071,9.071,9.071c5.003,0,9.073-4.07,9.073-9.071C19.07,6.939,16.895,3.659,13.53,2.238z"></path>
            <path fill="none" d="M9.999,7.616c0.426,0,0.771-0.345,0.771-0.771v-5.74c0-0.426-0.345-0.771-0.771-0.771c-0.427,0-0.771,0.345-0.771,0.771v5.74C9.228,7.271,9.573,7.616,9.999,7.616z"></path>
        </svg>
    </div>
    <div id="notification" class="banner_element">
        <div id="btn_notification">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path fill="none" d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"></path>
            </svg>
        </div>
        <ul id="notifications_list">
            <li class="notification_list_title">You have</li>
            <% _.each(notifications, function(notification){ %>
            <li class="notification_item">
                <% if(notification.amount > 0){ %>
                <span><%- notification.amount %> new </span><span><%- notification.type %></span>
                <% } %>
            </li>
            <% }); %>
        </ul>
    </div>
    <a href="/setting.html">
        <div id="user_avatar" class="banner_element"></div>
    </a>
    <div id="search_user" class="banner_element">
        <input name="user_search" type="search" value="" placeholder="search user"/>
    </div>
</script>


<script src="bundle/main.js" type="application/javascript"></script>
</body>
</html>
