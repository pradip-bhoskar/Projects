/*
	Steps to create jdbc application:
	
	1)install any database related software
	2)add the java.sql package in application
	3)load the driver---should have the .jar file in project
	4)Create the connection
	5)work with database
	6)close the connection

*/
package mypackage;
import java.sql.*;
import java.util.*;
public class BasicApp {

	public static void main(String[] args) throws SQLException, ClassNotFoundException
	{
		//load driver
		/* 
		 * com.mysql.jdbc.Driver d= new com.mysql.cj.jdbc.Driver();
			DriverManager.registerDriver(d);
		 */
		
		//	DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		//Establish the connection
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/java_db","Pradip","Pradip@123");
		
	/*	
	 	if(conn!=null)
		{
			System.out.println("Connection Successful.....");
		}
		else
		{
			System.out.println("Not connected...");
		}
		
		or
	
		if(conn.isClosed())
		{
			System.out.println("Not connected");
		}
		else
		{
			System.out.println("Connection successful");
		}
	*/
		
		//work with database
		//create table
		String q="create table if not exists jdbc_basic_app (id int(20) primary key auto_increment,first_name varchar(20) not null,"
				+ "last_name varchar(20),mobile varchar(20));";
		Statement stmt= conn.createStatement();
		int result=stmt.executeUpdate(q);
		if(result>0)
		{
			System.out.println("Table created");
			result=0;
		}
		else
		{
			System.out.println("Table not created , because already exists..");
		}
		
		//insert record using statement
		q ="insert into jdbc_basic_app values(null,'Pradip','Bhoskar','9623559804');";
		result=stmt.executeUpdate(q);
		if (result>0)
		{
			System.out.println("Record inserted using Statement interface");
			result=0;
		}
		
		//insert dynamic user input using PreparedStatement
		Scanner sc= new Scanner(System.in);
		
		System.out.println("Enter the name:");
		String name= sc.nextLine();
		System.out.println("Enter the surname:");
		String surname=sc.nextLine();
		System.out.println("Enter the mobile:");
		String mobile=sc.nextLine();
	
		q="insert into jdbc_basic_app(first_name,last_name,mobile) values (?,?,?);";
		PreparedStatement pstmt= conn.prepareStatement(q);
		pstmt.setString(1, name);
		pstmt.setString(2, surname);
		pstmt.setString(3, mobile);
		result=pstmt.executeUpdate();
		if (result>0)
		{
			System.out.println("Record inserted using PreparedStatement interface");
			result=0;
		}
		
		//see all records
		System.out.println("See all records");
		q="select * from jdbc_basic_app;";
		pstmt =conn.prepareStatement(q);
		ResultSet rs=pstmt.executeQuery();
		while(rs.next())
		{
			System.out.println(rs.getInt(1)+" "+rs.getString(2)+" "+rs.getString(3)+" "+rs.getString(4));
		}
	}
}
