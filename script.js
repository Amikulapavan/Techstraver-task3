document.addEventListener('DOMContentLoaded', () => {
                                                  document.getElementById('loginForm').addEventListener('submit', handleLogin);
                                                  document.getElementById('resetForm').addEventListener('submit', handlePasswordReset);
                                                  document.getElementById('forgotPasswordLink').addEventListener('click', showResetForm);
                                                  document.getElementById('backToLoginLink').addEventListener('click', showLoginForm);
                                              });
                                              
                                              function handleLogin(event) {
                                                  event.preventDefault();
                                                  const username = document.getElementById('username').value;
                                                  const password = document.getElementById('password').value;
                                                  
                                                  fetch('/api/login', {
                                                      method: 'POST',
                                                      headers: { 'Content-Type': 'application/json' },
                                                      body: JSON.stringify({ username, password })
                                                  }).then(response => response.json())
                                                    .then(data => {
                                                        if (data.success) {
                                                            alert('Login successful');
                                                            // Redirect to dashboard or another page
                                                        } else {
                                                            alert('Login failed: ' + data.message);
                                                        }
                                                    });
                                              }
                                              
                                              function handlePasswordReset(event) {
                                                  event.preventDefault();
                                                  const email = document.getElementById('resetEmail').value;
                                                  
                                                  fetch('/api/reset-password', {
                                                      method: 'POST',
                                                      headers: { 'Content-Type': 'application/json' },
                                                      body: JSON.stringify({ email })
                                                  }).then(response => response.json())
                                                    .then(data => {
                                                        if (data.success) {
                                                            alert('Password reset link sent to your email');
                                                            showLoginForm();
                                                        } else {
                                                            alert('Error: ' + data.message);
                                                        }
                                                    });
                                              }
                                              
                                              function showResetForm() {
                                                  document.getElementById('login-form').classList.add('hidden');
                                                  document.getElementById('reset-form').classList.remove('hidden');
                                              }
                                              
                                              function showLoginForm() {
                                                  document.getElementById('reset-form').classList.add('hidden');
                                                  document.getElementById('login-form').classList.remove('hidden');
                                              }