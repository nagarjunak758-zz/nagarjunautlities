package com.mysql;

import java.sql.Connection;
import java.sql.SQLException;


import org.apache.commons.dbcp2.BasicDataSource;

public class ConnectionFactory {

	private static final BasicDataSource dataSource = new BasicDataSource();

	static {
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://nkanamar-ld1:3306/ump_metadata");
		dataSource.setUsername("udqp");
		dataSource.setPassword("password");
		dataSource.setInitialSize(100);
		dataSource.setLifo(false);
	}

	private ConnectionFactory() {
		;
		// TODO Auto-generated constructor stub
	}

	public static Connection getConnection() throws SQLException {
		return dataSource.getConnection();
	}

}
