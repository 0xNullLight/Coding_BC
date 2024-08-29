### Part 1: Installing PostgreSQL on Windows

#### Step 1: Download PostgreSQL Installer

1. Visit the [PostgreSQL official website](https://www.postgresql.org/download/windows/).
2. Click on the "Download the installer" link which will redirect you to the PostgreSQL Windows installer page on EnterpriseDB.
3. Choose the appropriate version for your system and click "Download".

#### Step 2: Run the Installer

1. Once the installer is downloaded, double-click the `.exe` file to start the installation process.
2. Click "Next" to proceed through the installation wizard.

#### Step 3: Choose Installation Directory

1. Choose the directory where PostgreSQL should be installed. The default is usually fine, but you can select a different location if preferred.
2. Click "Next".

#### Step 4: Select Components

1. Make sure to select "PostgreSQL Server" and any additional components you need, such as "pgAdmin" (a graphical management tool for PostgreSQL).
2. Click "Next".

#### Step 5: Set Password for PostgreSQL Superuser

1. Enter a password for the PostgreSQL superuser (default user is `postgres`). Make sure to remember this password as it will be needed to access the database.
2. Click "Next".

#### Step 6: Choose Port Number

1. The default port for PostgreSQL is 5432. You can leave this as is unless you need to use a different port.
2. Click "Next".

#### Step 7: Select Locale

1. Choose the locale to use for the PostgreSQL database. The default locale is usually sufficient.
2. Click "Next".

#### Step 8: Complete Installation

1. Review your choices and click "Next" to start the installation process.
2. Once the installation is complete, click "Finish" to exit the wizard.

#### Step 9: Verify Installation

1. Open Command Prompt and type the following command to check the PostgreSQL version:

   ```cmd
   psql --version
   ```

   This command should display the installed version of PostgreSQL.

#### Step 10: Start PostgreSQL Service

1. PostgreSQL should start automatically. To manually start or stop the PostgreSQL service, open the Services app (`services.msc`).
2. Find the "PostgreSQL" service, right-click it, and choose "Start" or "Stop" as needed.

#### Step 11: Access PostgreSQL Command Line

1. Open the "SQL Shell (psql)" from the PostgreSQL folder in the Start menu.
2. Enter your password and connect to the database. You can use the following commands within the SQL Shell:

   ```sql
   \l  -- List all databases
   \c mydb  -- Connect to the database 'mydb'
   \q  -- Quit the SQL Shell
   ```

#### Step 12: Create a New PostgreSQL User and Database

1. Open the SQL Shell (psql) and enter the following commands to create a new user and database:

   ```sql
   CREATE USER myuser WITH PASSWORD 'mypassword';
   CREATE DATABASE mydb OWNER myuser;
   GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
   ```

   Replace `myuser`, `mypassword`, and `mydb` with your desired username, password, and database name, respectively.

### Part 2: Uninstalling PostgreSQL from Windows

#### Step 1: Stop PostgreSQL Service

1. Open the Services app (`services.msc`).
2. Find the "PostgreSQL" service, right-click it, and choose "Stop".

#### Step 2: Uninstall PostgreSQL

1. Open "Control Panel" and go to "Programs and Features".
2. Find "PostgreSQL" in the list of installed programs.
3. Right-click it and choose "Uninstall/Change".
4. Follow the prompts in the PostgreSQL uninstaller to remove the software.

#### Step 3: Remove Remaining Files and Directories

1. Delete PostgreSQL installation directory (default is `C:\Program Files\PostgreSQL`).
2. Optionally, delete PostgreSQL data directory (default is `C:\ProgramData\PostgreSQL`).

#### Step 4: Remove PostgreSQL User Data

1. If you created a PostgreSQL user in Windows, you may want to remove it:
   - Open "Control Panel" > "User Accounts" > "User Accounts".
   - Select "Manage another account" and delete the PostgreSQL user if it exists.

#### Step 5: Verify Uninstallation

1. Open Command Prompt and type:

   ```cmd
   psql --version
   ```

   You should receive an error indicating that the command is not recognized, confirming that PostgreSQL has been removed.

### Conclusion

By following these steps, you can install and completely uninstall PostgreSQL on Windows. This guide covers both basic installation and complete removal, including steps for managing PostgreSQL services and user accounts.

For further details and advanced configuration options, please refer to the [PostgreSQL Documentation](https://www.postgresql.org/docs/current/index.html).
