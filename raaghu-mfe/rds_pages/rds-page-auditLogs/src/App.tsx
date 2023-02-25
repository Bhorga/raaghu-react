import React, { Suspense } from "react";

import Auditlogs from "./Auditlogs/Auditlogs";

const operationLogsHeaders = [
	{
		displayName: "User Name",
		key: "username",
		datatype: "text",
		sortable: true,
		isEndUserEditing: true,
	},
	{ displayName: "Service", key: "service", datatype: "text", sortable: true },
	{ displayName: "Action", key: "action", datatype: "text", sortable: true },
	{
		displayName: "Duration",
		key: "duration",
		datatype: "number",
		sortable: true,
	},
	{
		displayName: "IP Address",
		key: "ipAddress",
		datatype: "text",
		sortable: true,
	},
	{
		displayName: "Browser",
		key: "browser",
		datatype: "avatarTitleInfo",
		sortable: true,
	},
	{ displayName: "Time", key: "time", datatype: "text", sortable: true },
];

const operationLogs = [
  { id: 1, username: "Admin", service:"UserDelegationAppService", action:"", duration: "1351", ipAddress: "103.151.184.6", 
  browser: {
    "avatar":  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
    "title": "Chrome",
    "info": "Window NT 10"
  }, time:"11/15/2021, 2:44:52 PM" },
  { id: 2, username: "Manager", service:"UserAppService", action:"GetActiveDelegationsUser", duration: "1151", ipAddress: "103.151.184.6",  browser: {
    "avatar":  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Opera_browser_logo_2013_vector.svg/512px-Opera_browser_logo_2013_vector.svg.png",
    "title": "Opera",
    "info": "Window NT 10"
  },time:"11/15/2021, 2:44:52 PM"  },
  { id: 3, username: "Manager", service:"UserDelegationAppService", action:"", duration: "1321", ipAddress: "103.151.184.6",
  browser: {
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/480px-Microsoft_Edge_logo_%282019%29.svg.png",
    "title": "Edge",
    "info": "Window NT 10"
  },time:"11/15/2021, 2:44:52 PM" },
  { id: 4, username: "Developer", service:"UserDelegationAppService", action:"", duration: "1301", ipAddress: "103.151.184.6",
  browser: {
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png",
    "title": "Safari",
    "info": "Window NT 10"
  },time:"11/15/2021, 2:44:52 PM"  },
  { id: 5, username: "Developer", service:"UserDelegationAppService", action:"GetActiveUserDelegations", duration: "1051", ipAddress: "103.151.184.6", 
   browser: {
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1971px-Firefox_logo%2C_2019.svg.png",
    "title": "Firefox",
    "info": "Window NT 10"
  },time:"11/15/2021, 2:44:52 PM"  },
  { id: 6, username: "HR", service:"UserDelegationAppService", action:"", duration: "1401", ipAddress: "103.151.184.6", 
   browser: {
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/480px-Microsoft_Edge_logo_%282019%29.svg.png",
    "title": "Edge",
    "info": "Window NT 10"
  },time:"11/15/2021, 2:44:52 PM"  },
  { id: 7, username: "HR", service:"UserDelegationAppService", action:"", duration: "1105", ipAddress: "103.151.184.6", 
   browser: {
    "avatar":  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
    "title": "Chrome",
    "info": "Window NT 10"
  },time:"11/15/2021, 2:44:52 PM"  },
]

const changeLogs = [
  { id: 1, username: "Admin", action:"Created", object: "Role" ,time:"11/15/2021, 2:44:52 PM" },
  { id: 2, username: "Manager", action:"Updated", object: "Role" ,time:"11/15/2021, 2:44:52 PM" },
  ]


 const  changeLogsHeaders = [
    {displayName: "Action",key: "action",datatype: "text",sortable: true,},
    {displayName: "Object",key: "object",datatype: "text",sortable: true,}, 
    {displayName: "User Name",key: "username",datatype: "text",sortable: true,isEndUserEditing: true,},
    {displayName: "Time",key: "time", datatype: "text",sortable: true,},
  ]

const App = () => (
	<Suspense>
		<Auditlogs></Auditlogs>
	</Suspense>
);

export default App;
