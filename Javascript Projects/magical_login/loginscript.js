function magic() {
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            const usernameError = document.getElementById('usernameError');
            const passwordError = document.getElementById('passwordError');
            const loginButton = document.getElementById('loginButton');


            let isValid = true;

            // Reset error messages
            usernameError.style.display = 'none';
            passwordError.style.display = 'none';

            const user = username.value.trim();
            const pass = password.value.trim();

            // Validate username
            if (user === '' && username.value.trim() !== 'pradipbhoskar1997@gmail.com') {
                usernameError.style.display = 'block';
                isValid = false;
            }

            // Validate password
            if (pass === '') {
                passwordError.style.display = 'block';
                isValid = false;
            }

            //specific email
            if (user.includes("pradipbhoskar1997@gmail.com")) {
            }
            else {
                usernameError.style.display = 'block';
                isValid = false;
            }
            //specific password
            if (pass.includes("12345")) {
            }
            else {
                passwordError.style.display = 'block';
                isValid = false;
            }


            if (isValid) {
                // Simulate successful login logic

            } else {
                // Move login button if inputs are invalid
                const loginButton = document.getElementById('loginButton');
                const container = document.getElementById('loginContainer');

                //const randomNumber = Math.round(Math.random() * 90);
                // loginButton.style.marginLeft = `${randomNumber}%`;


                const top = Math.round(Math.random() * 90);
                const left = Math.round(Math.random() * 90);

                loginButton.style.top = `${top}%`;
                loginButton.style.left = `${left}%`;


                const width = Math.round(Math.random() * 500);
                const height = Math.round(Math.random() * 100);

                if (width > 100 && height > 50) {
                    loginButton.style.width = `${width}px`;
                    loginButton.style.height = `${height}px`;
                }



                const horizontal = Math.round(Math.random() * 200);
                const vertical = Math.round(Math.random() * 100);
                const blur = Math.round(Math.random() * 150);
                const spread = Math.round(Math.random() * 500);
                const r = Math.round(Math.random() * 255);
                const g = Math.round(Math.random() * 255);
                const b = Math.round(Math.random() * 255);
                const o = Math.random();


                // container.style.boxShadow = 15px 15px 25px rgba(0, 0, 0, 0.4);
                // container.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${o})`;
                // container.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${o}),-${horizontal}px -${vertical}px ${blur}px ${spread}px rgba(${b}, ${g}, ${r}, ${o}),-${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${r}, ${r}, ${b}, ${o}),${horizontal}px -${vertical}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${o})  `;


                // console.log(horizontal,vertical,blur,spread,r,g,b,o);

            }
        }


        function validateLogin() {
            alert('Login successful!');
        }