<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%@page import="java.io.*"%>



<%

  request.setCharacterEncoding("UTF-8");



  String dest = "C:/test/println.txt";

  

  String user_name = request.getParameter("user_name");

  String user_id = request.getParameter("user_id");

  String user_pw = request.getParameter("user_pw");

  String user_pw2 = request.getParameter("user_pw2");

  String user_address = request.getParameter("user_address");

  String user_birth_year = request.getParameter("user_birth_year");

  String user_birth_month = request.getParameter("user_birth_month");

  String user_birth_day = request.getParameter("user_birth_day");

  String message = ""; // 결과 메시지

  String script = "";  // 결과 후 실행할 javascript 

  

  message = "성공적으로 회원가입 되었습니다.";



  StringWriter str = new StringWriter();

  PrintWriter pw = new PrintWriter(str);

  

  pw.println("[이름] : "+user_name);

  pw.println("[아이디] : "+user_id);

  pw.println("[비밀번호] : "+user_pw);

  pw.println("[주소] : "+user_address);

  pw.println("[생년월일] :        "+user_birth_year+"년"+user_birth_month+"월"+user_birth_day+"일");

  pw.println("---------------------------------------\n");

  StringReader strReader = new StringReader(str.toString());

  //str.toString(); 왜하는지 까머금 왜 toString이더라 걍 str쓰니 에러나네

  FileWriter file = new FileWriter(dest,true);

  System.out.println(strReader);

  System.out.println(strReader);

  file.append(str.toString());

  

  file.close();

%>

<html>

<head>

	<script type="text/javascript">

	</script>

<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">

<title>Insert title here</title>

</head>

<body>

	<%=str%>

</body>

</html>



출처: https://ddo-o.tistory.com/76 [공순이의 블로그]