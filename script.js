const events = [
    { id: '1102', description: 'Security Log cleared', importance: 'May indicate an attacker is attempting to cover their tracks.' },
    { id: '4624', description: 'Successful account Logon', importance: 'Helps identify unauthorized or suspicious logon attempts.' },
    { id: '4625', description: 'Failed account Logon', importance: 'Indicates potential brute-force attacks.' },
    { id: '4648', description: 'Logon attempt with explicit credentials', importance: 'May suggest credential theft or improper use of accounts.' },
    { id: '4662', description: 'An operation was performed on an object', importance: 'Helps track access to critical objects in Active Directory.' },
    { id: '4663', description: 'Access to an object was requested', importance: 'Monitors attempts to perform specific actions on sensitive objects.' },
    { id: '4670', description: 'Permissions on an object were changed', importance: 'Helps detect potential tampering with sensitive files.' },
    { id: '4698', description: 'A scheduled task was created', importance: 'Helps detect malicious scheduled task creation.' },
    { id: '4720', description: 'New user account created', importance: 'Monitors for unauthorized account creation.' },
    { id: '4724', description: 'An attempt was made to reset an account\'s password', importance: 'Monitors for unauthorized password resets.' },
    { id: '4768', description: 'A Kerberos authentication ticket was requested', importance: 'Monitors initial authentication requests.' },
    { id: '4769', description: 'A Kerberos service ticket was requested', importance: 'Monitors for potential Kerberoasting attacks.' },
    { id: '4776', description: 'The domain controller attempted to validate the credentials', importance: 'Helps identify failed or successful attempts to validate credentials.' },
    { id: '6005', description: 'The event log service was started', importance: 'Indicates the system startup.' },
    { id: '6006', description: 'The event log service was stopped', importance: 'Indicates the proper system shutdown.' },
    { id: '6008', description: 'The previous system shutdown was unexpected', importance: 'Indicates an unexpected shutdown.' },
    { id: '7030', description: 'A service has stopped unexpectedly', importance: 'Useful for monitoring and tracking the start of services.' },
    { id: '7045', description: 'A new service was installed', importance: 'Can be used to track the installation of new services.' },
    { id: '4626', description: 'User /Device claims information', importance: 'Provides information about user or device claims.' },
    { id: '4634', description: 'An account was logged off', importance: 'Indicates when a user account has been logged off.' },
    { id: '4646', description: 'IKE DoS-prevention mode started', importance: 'Indicates that the IKE DoS-prevention mode has been activated.' },
    { id: '4647', description: 'User  initiated logoff', importance: 'Indicates that a user has initiated a logoff.' },
    { id: '4650', description: 'An IPsec Main Mode security association was established', importance: 'Indicates that an IPsec Main Mode security association has been established.' },
    { id: '4651', description: 'An IPsec Main Mode security association was established', importance: 'Indicates that an IPsec Main Mode security association has been established.' },
    { id: '4652', description: 'An IPsec Main Mode negotiation failed', importance: 'Indicates that an IPsec Main Mode negotiation has failed.' },
    { id: '4653', description: 'An IPsec Main Mode negotiation failed', importance: 'Indicates that an IPsec Main Mode negotiation has failed.' },
    { id: '4654', description: 'An IPsec Quick Mode negotiation failed', importance: 'Indicates that an IPsec Quick Mode negotiation has failed.' },
    { id: '4655', description: 'An IPsec Main Mode security association ended', importance: 'Indicates that an IPsec Main Mode security association has ended.' },
    { id: '4660', description: 'An object was deleted', importance: 'Indicates that an object has been deleted.' },
    { id: '4661', description: 'A handle to an object was requested', importance: 'Indicates that a handle to an object was requested.' },
    { id: '4662', description: 'An operation was performed on an object', importance: 'Indicates that an operation was performed on an object.' },
    { id: '4671', description: 'An application attempted to access a blocked ordinal through the TBS', importance: 'Indicates that an application attempted to access a blocked ordinal.' },
    { id: '4672', description: 'Special privileges assigned to new logon', importance: 'Indicates that special privileges have been assigned to a new logon.' },
    { id: '4673', description: 'A privileged service was called', importance: 'Indicates that a privileged service was called.' },
    { id: '4674', description: 'An operation was attempted on a privileged object', importance: 'Indicates that an operation was attempted on a privileged object.' },
    { id: '4688', description: 'A new process has been created', importance: 'Indicates that a new process has been created.' },
    { id: '4689', description: 'A process has exited', importance: 'Indicates that a process has exited.' },
    { id: '4690', description: 'An attempt was made to duplicate a handle to an object', importance: 'Indicates that an attempt was made to duplicate a handle to an object.' },
    { id: '4691', description: 'Indirect access to an object was requested', importance: 'Indicates that indirect access to an object was requested.' },
    { id: '4692', description: 'Backup of data protection master key was attempted', importance: 'Indicates that a backup of the data protection master key was attempted.' },
    { id: '4693', description: 'Recovery of data protection master key was attempted', importance: 'Indicates that recovery of the data protection master key was attempted.' },
    { id: '4700', description: 'A scheduled task was enabled', importance: 'Indicates that a scheduled task has been enabled.' },
    { id: '4701', description: 'A scheduled task was disabled', importance: 'Indicates that a scheduled task has been disabled.' },
    { id: '4702', description: 'A scheduled task was updated', importance: 'Indicates that a scheduled task has been updated.' },
    { id: '4721', description: 'A user account was enabled', importance: 'Indicates that a user account has been enabled.' },
    { id: '4723', description: 'An attempt was made to change an account\'s password', importance: 'Indicates an attempt to change an account\'s password.' },
    { id: '4725', description: 'A user account was disabled', importance: 'Indicates that a user account has been disabled.' },
    { id: '4726', description: 'A user account was deleted', importance: 'Indicates that a user account has been deleted.' },
    { id: '4728', description: 'A member was added to a security-enabled global group', importance: 'Indicates that a member has been added to a security-enabled global group.' },
    { id: '4730', description: 'A security-enabled global group was deleted', importance: 'Indicates that a security-enabled global group has been deleted.' },
    { id: '4740', description: 'A user account was locked out', importance: 'Indicates that a user account has been locked out.' },
    { id: '4764', description: 'A security-disabled group was deleted', importance: 'Indicates that a security-disabled group has been deleted.' },
    { id: '4864', description: 'A namespace collision was detected', importance: 'Indicates that a namespace collision has been detected.' },
    { id: '5376', description: 'Credential Manager credentials were backed up', importance: 'Indicates that Credential Manager credentials have been backed up.' },
    { id: '5377', description: 'Credential Manager credentials were restored from a backup', importance: 'Indicates that Credential Manager credentials have been restored from a backup.' },
    { id: '6009', description: 'Windows product name, version, build number, service pack number, and OS type detected at boot time', importance: 'Indicates system information at startup.' },
    { id: '6001', description: 'The system time was changed', importance: 'Indicates that the system time has been modified.' },
    { id: '6002', description: 'The system has been shut down', importance: 'Indicates that the system has been shut down.' },
    { id: '6003', description: 'The system has been started', importance: 'Indicates that the system has been started.' },
    { id: '6004', description: 'The system has been restarted', importance: 'Indicates that the system has been restarted.' },
    { id: '6007', description: 'The system has been put into sleep mode', importance: 'Indicates that the system has entered sleep mode.' },
    { id: '6008', description: 'The previous system shutdown was unexpected', importance: 'Indicates an unexpected shutdown.' },
    { id: '7000', description: 'A service failed to start', importance: 'Indicates that a service failed to start.' },
    { id: '7001', description: 'A service has been started', importance: 'Indicates that a service has been started.' },
    { id: '7002', description: 'A service has been stopped', importance: 'Indicates that a service has been stopped.' },
    { id: '7003', description: 'A service has been paused', importance: 'Indicates that a service has been paused.' },
    { id: '7004', description: 'A service has been resumed', importance: 'Indicates that a service has been resumed.' },
    { id: '7005', description: 'A service has been deleted', importance: 'Indicates that a service has been deleted.' },
    { id: '7006', description: 'A service has been created', importance: 'Indicates that a service has been created.' },
    { id: '7007', description: 'A service has been modified', importance: 'Indicates that a service has been modified.' },
    { id: '7008', description: 'A service has been configured', importance: 'Indicates that a service has been configured.' },
    { id: '7009', description: 'A service has been started with a specific user account', importance: 'Indicates that a service has been started with a specific user account.' },
    { id: '7010', description: 'A service has been stopped with a specific user account', importance: 'Indicates that a service has been stopped with a specific user account.' },
    { id: '7011', description: 'A service did not respond within the specified time', importance: 'Indicates that a service did not respond in a timely manner.' },
    { id: '7012', description: 'A service has been restarted', importance: 'Indicates that a service has been restarted.' },
    { id: '7013', description: 'A service has been paused with a specific user account', importance: 'Indicates that a service has been paused with a specific user account.' },
    { id: '7014', description: 'A service has been resumed with a specific user account', importance: 'Indicates that a service has been resumed with a specific user account.' },
    { id: '7015', description: 'A service has been deleted with a specific user account', importance: 'Indicates that a service has been deleted with a specific user account.' },
    { id: '7016', description: 'A service has been created with a specific user account', importance: 'Indicates that a service has been created with a specific user account.' },
    { id: '7017', description: 'A service has been modified with a specific user account', importance: 'Indicates that a service has been modified with a specific user account.' },
    { id: '7018', description: 'A service has been configured with a specific user account', importance: 'Indicates that a service has been configured with a specific user account.' },
    { id: '7019', description: 'A service has been started with a specific user account', importance: 'Indicates that a service has been started with a specific user account.' },
    { id: '7020', description: 'A service has been stopped with a specific user account', importance: 'Indicates that a service has been stopped with a specific user account.' },
    { id: '7021', description: 'A service has been paused with a specific user account', importance: 'Indicates that a service has been paused with a specific user account.' },
    { id: '7022', description: 'A service has been resumed with a specific user account', importance: 'Indicates that a service has been resumed with a specific user account.' },
    { id: '7023', description: 'A service terminated with a service-specific error', importance: 'Indicates that a service terminated with a specific error.' },
    { id: '7024', description: 'A service terminated with a general error', importance: 'Indicates that a service terminated with a general error.' },
    { id: '7025', description: 'A service has been started with a specific user account', importance: 'Indicates that a service has been started with a specific user account.' },
    { id: '7026', description: 'A service has been stopped with a specific user account', importance: 'Indicates that a service has been stopped with a specific user account.' },
    { id: '7027', description: 'A service has been paused with a specific user account', importance: 'Indicates that a service has been paused with a specific user account.' },
    { id: '7028', description: 'A service has been resumed with a specific user account', importance: 'Indicates that a service has been resumed with a specific user account.' },
    { id: '7029', description: 'A service has been deleted with a specific user account', importance: 'Indicates that a service has been deleted with a specific user account.' },
    { id: '7031', description: 'A service has stopped unexpectedly', importance: 'Useful for monitoring and tracking the start of services.' },
    { id: '7032', description: 'A service has been started unexpectedly', importance: 'Indicates that a service has been started unexpectedly.' },
    { id: '7033', description: 'A service has been stopped unexpectedly', importance: 'Indicates that a service has been stopped unexpectedly.' },
    { id: '7034', description: 'A service has been paused unexpectedly', importance: 'Indicates that a service has been paused unexpectedly.' },
    { id: '7035', description: 'A service has been resumed unexpectedly', importance: 'Indicates that a service has been resumed unexpectedly.' },
    { id: '7036', description: 'A service has entered the running or stopped state', importance: 'Indicates that a service has changed state.' },
    { id: '7037', description: 'A service has been configured with a specific user account', importance: 'Indicates that a service has been configured with a specific user account.' },
    { id: '7038', description: 'A service has been started with a specific user account', importance: 'Indicates that a service has been started with a specific user account.' },
    { id: '7039', description: 'A service has been stopped with a specific user account', importance: 'Indicates that a service has been stopped with a specific user account.' },
    { id: '7040', description: 'A service has been paused with a specific user account', importance: 'Indicates that a service has been paused with a specific user account.' },
    { id: '7041', description: 'A service has been resumed with a specific user account', importance: 'Indicates that a service has been resumed with a specific user account.' },
    { id: '7042', description: 'A service has been deleted with a specific user account', importance: 'Indicates that a service has been deleted with a specific user account.' },
    { id: '7043', description: 'A service has been created with a specific user account', importance: 'Indicates that a service has been created with a specific user account.' },
    { id: '7044', description: 'A service has been modified with a specific user account', importance: 'Indicates that a service has been modified with a specific user account.' },
    { id: '7045', description: 'A new service was installed', importance: 'Can be used to track the installation of new services.' },
    { id: '7046', description: 'A service has been configured with a specific user account', importance: 'Indicates that a service has been configured with a specific user account.' },
    { id: '7047', description: 'A service has been started with a specific user account', importance: 'Indicates that a service has been started with a specific user account.' },
    { id: '7048', description: 'A service has been stopped with a specific user account', importance: 'Indicates that a service has been stopped with a specific user account.' },
    { id: '7049', description: 'A service has been paused with a specific user account', importance: 'Indicates that a service has been paused with a specific user account.' },
    { id: '7050', description: 'A service has been resumed with a specific user account', importance: 'Indicates that a service has been resumed with a specific user account.' },
    { id: '7051', description: 'A service has been deleted with a specific user account', importance: 'Indicates that a service has been deleted with a specific user account.' },
    { id: '7052', description: 'A service has been created with a specific user account', importance: 'Indicates that a service has been created with a specific user account.' },
    { id: '7053', description: 'A service has been modified with a specific user account', importance: 'Indicates that a service has been modified with a specific user account.' },
    { id: '7054', description: 'A service has been configured with a specific user account', importance: 'Indicates that a service has been configured with a specific user account.' },
];


let currentPage = 1;
const rowsPerPage = 5;

function displayTable(page) {
    const tableBody = document.querySelector('#eventTable tbody');
    tableBody.innerHTML = ''; // Clear previous rows

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedEvents = events.slice(start, end);

    paginatedEvents.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${event.id}</td><td>${event.description}</td><td>${event.importance}</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById('pageInfo').textContent = `Page ${page} of ${Math.ceil(events.length / rowsPerPage)}`;
    document.getElementById('prevBtn').disabled = page === 1;
    document.getElementById('nextBtn').disabled = page === Math.ceil(events.length / rowsPerPage);
}

function changePage(direction) {
    currentPage += direction;
    displayTable(currentPage);
}

function searchEvent() {
    const input = document.getElementById('searchInput');
    const value = input.value.trim();
    if (!value) {
        input.focus();
        input.classList.add('is-invalid');
        return false;
    }
    input.classList.remove('is-invalid');
    window.location.href = 'searchResults.html?query=' + encodeURIComponent(value);
}

// Initial display
displayTable(currentPage);
        resultsDiv.textContent = 'No results found.';
    

function storeSearchInput() {
    const searchInput = document.getElementById('searchInput').value;
    localStorage.setItem('searchQuery', searchInput);
}

    localStorage.setItem('searchQuery', searchInput);



// Initial display
displayTable(currentPage);
