// Toggle between User and Admin Login
function showUserLogin() {
    document.getElementById('user-login').classList.remove('hidden');
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('user-tab').classList.add('active');
    document.getElementById('admin-tab').classList.remove('active');
}

function showAdminLogin() {
    document.getElementById('admin-login').classList.remove('hidden');
    document.getElementById('user-login').classList.add('hidden');
    document.getElementById('admin-tab').classList.add('active');
    document.getElementById('user-tab').classList.remove('active');
}

// Mock User Login
function userLogin() {
    const username = document.getElementById('user-username').value;
    const password = document.getElementById('user-password').value;

    if (username === 'user' && password === 'password') {
        alert('User login successful');
    } else {
        alert('Invalid user credentials');
    }
}

// Mock Admin Login
function adminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === 'admin' && password === 'adminpass') {
        alert('Admin login successful');
    } else {
        alert('Invalid admin credentials');
    }
}
