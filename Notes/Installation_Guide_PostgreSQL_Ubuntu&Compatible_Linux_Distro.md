### Part 1: Installing PostgreSQL on Ubuntu 22.04 (Jammy), Linux Mint, and Other Compatible Linux Distros

#### Step 1: Update the Package List

Before installing PostgreSQL, update the package list to ensure you have the latest information about available packages:

```bash
sudo apt update
```

#### Step 2: Install PostgreSQL

Install PostgreSQL and its additional tools (`postgresql-contrib`):

```bash
sudo apt install postgresql postgresql-contrib
```

- **`postgresql`**: The core PostgreSQL database server.
- **`postgresql-contrib`**: A package that includes additional utilities and features for PostgreSQL.

#### Step 3: Verify Installation

To verify that PostgreSQL is installed correctly, check its version:

```bash
psql --version
```

This command should display the installed version of PostgreSQL.

#### Step 4: Start PostgreSQL Service

PostgreSQL usually starts automatically after installation. To check if it's running:

```bash
sudo systemctl status postgresql
```

If it’s running, you will see `Active: active (running)`. If it’s inactive, start the service with:

```bash
sudo systemctl start postgresql
```

#### Step 5: Enable PostgreSQL to Start on Boot

Ensure PostgreSQL starts automatically on system boot:

```bash
sudo systemctl enable postgresql
```

#### Step 6: Switch to the PostgreSQL User

PostgreSQL creates a default user called `postgres` for managing the database. Switch to this user:

```bash
sudo -i -u postgres
```

**IF** you encounter the error `sudo: unable to change directory to /var/lib/postgresql: No such file or directory`, follow these additional steps to resolve it.

1. **Check the Existence of PostgreSQL Directories**:

   Verify if the necessary PostgreSQL directories exist:

   ```bash
   ls -ld /var/lib/postgresql /etc/postgresql /etc/postgresql-common /var/log/postgresql
   ```

2. **Create Required Directories**:

   If the `/var/lib/postgresql` directory is missing, create it and set the correct permissions:

   ```bash
   sudo mkdir -p /var/lib/postgresql
   sudo chown postgres:postgres /var/lib/postgresql
   sudo chmod 700 /var/lib/postgresql
   ```

3. **Initialize the PostgreSQL Data Directory**:

   If the directory exists but is not initialized, you might need to initialize it:

   ```bash
   sudo -u postgres /usr/lib/postgresql/$(psql --version | awk '{print $3}' | cut -d'.' -f1,2)/bin/initdb -D /var/lib/postgresql/data
   ```

   Replace `$(psql --version | awk '{print $3}' | cut -d'.' -f1,2)` with your PostgreSQL version if necessary.

4. **Start PostgreSQL Service Again**:

   Restart PostgreSQL to apply the changes:

   ```bash
   sudo systemctl restart postgresql
   ```

5. **Try Switching to the PostgreSQL User Again**:

   Now attempt to switch to the `postgres` user again:

   ```bash
   sudo -i -u postgres
   ```

#### Step 7: Access the PostgreSQL Shell

While logged in as the `postgres` user, access the PostgreSQL interactive terminal (psql):

```bash
psql
```

This will bring you to the PostgreSQL prompt, indicated by `postgres=#`. To exit the PostgreSQL prompt, type:

```bash
\q
```

#### Step 8: Create a New PostgreSQL User and Database

To create a new PostgreSQL user and database, use the following commands within the PostgreSQL shell:

```sql
CREATE USER myuser WITH PASSWORD 'mypassword';
CREATE DATABASE mydb OWNER myuser;
GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
```

Replace `myuser` and `mypassword` with your desired username and password, and `mydb` with your desired database name.

### Part 2: Uninstalling PostgreSQL from Ubuntu 22.04 (Jammy), Linux Mint, and Other Compatible Linux Distros

#### Step 1: Stop the PostgreSQL Service

Before uninstalling, stop the PostgreSQL service to ensure no processes are running:

```bash
sudo systemctl stop postgresql
```

#### Step 2: Uninstall PostgreSQL

Remove PostgreSQL and its additional packages:

```bash
sudo apt remove --purge postgresql postgresql-contrib
```

The `--purge` option removes the packages along with their configuration files.

#### Step 3: Remove Unused Dependencies

To clean up any packages that were automatically installed with PostgreSQL and are no longer needed:

```bash
sudo apt autoremove
```

#### Step 4: Remove PostgreSQL Directories

To completely remove all PostgreSQL-related files and directories, use the following commands:

```bash
sudo rm -rf /var/lib/postgresql/
sudo rm -rf /etc/postgresql/
sudo rm -rf /etc/postgresql-common/
sudo rm -rf /var/log/postgresql/
```

- **`/var/lib/postgresql/`**: Directory containing PostgreSQL data files.
- **`/etc/postgresql/`**: Directory containing PostgreSQL configuration files.
- **`/etc/postgresql-common/`**: Common configuration files for PostgreSQL.
- **`/var/log/postgresql/`**: Directory containing PostgreSQL log files.

> **Warning**: These commands will permanently delete all PostgreSQL data, configuration files, and logs. Make sure to back up any important data before running these commands.

#### Step 5: Verify Uninstallation

To verify that PostgreSQL has been completely removed, check the status of the PostgreSQL service:

```bash
sudo systemctl status postgresql
```

You should see an error indicating that the service could not be found, confirming the removal.

### Conclusion

By following these steps, you can install and completely uninstall PostgreSQL on Ubuntu 22.04 (Jammy), Linux Mint, and other compatible Linux distros. This guide includes detailed instructions for resolving issues related to missing directories and ensures all associated files and directories are properly managed.

For further details and advanced configuration options, please refer to the [PostgreSQL Documentation](https://www.postgresql.org/docs/current/index.html).
