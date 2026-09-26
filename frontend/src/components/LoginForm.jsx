import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);


    // ========================================
    // VALIDATION
    // ========================================

    const validateForm = () => {

        const newErrors = {};


        // Email
        if (!email.trim()) {

            newErrors.email =
                "Please enter your email address.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {

            newErrors.email =
                "Please enter a valid email address.";

        }


        // Password
        if (!password.trim()) {

            newErrors.password =
                "Please enter your password.";

        } else if (password.length < 6) {

            newErrors.password =
                "Password must be at least 6 characters.";

        }


        return newErrors;
    };


    // ========================================
    // LOGIN
    // ========================================

    const handleSubmit = async (event) => {

        event.preventDefault();

        setServerError("");


        // Validate
        const validationErrors = validateForm();

        setErrors(validationErrors);


        // Stop if invalid
        if (
            Object.keys(validationErrors).length > 0
        ) {
            return;
        }


        try {

            setLoading(true);


            // Send request
            const response = await axios.post(
                "/api/login",
                {
                    email: email,
                    password: password,
                }
            );


            // Successful login
            if (response.data.success) {

                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "userEmail",
                    response.data.user.email
                );


                // Redirect
                navigate("/dashboard");

            }


        } catch (error) {

            console.error(
                "Login error:",
                error
            );


            if (error.response) {

                setServerError(
                    error.response.data.message ||
                    "Invalid email or password."
                );

            } else {

                setServerError(
                    "Unable to connect to the server. Please try again."
                );

            }


        } finally {

            setLoading(false);

        }

    };


    return (
        <div className="login-card">

            <h1>Sign In</h1>


            <form onSubmit={handleSubmit}>


                {/* SERVER ERROR */}

                {serverError && (
                    <div className="server-error">
                        {serverError}
                    </div>
                )}


                {/* EMAIL */}

                <div className="input-group">

                    <input
                        type="email"
                        placeholder="Email or mobile number"
                        value={email}
                        onChange={(event) => {

                            setEmail(event.target.value);

                            if (errors.email) {

                                setErrors({
                                    ...errors,
                                    email: "",
                                });

                            }

                            if (serverError) {
                                setServerError("");
                            }

                        }}
                    />


                    {errors.email && (
                        <p className="error-message">
                            {errors.email}
                        </p>
                    )}

                </div>


                {/* PASSWORD */}

                <div className="input-group">

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => {

                            setPassword(event.target.value);

                            if (errors.password) {

                                setErrors({
                                    ...errors,
                                    password: "",
                                });

                            }

                            if (serverError) {
                                setServerError("");
                            }

                        }}
                    />


                    {errors.password && (
                        <p className="error-message">
                            {errors.password}
                        </p>
                    )}

                </div>


                {/* SIGN IN */}

                <button
                    type="submit"
                    className="login-button"
                    disabled={loading}
                >

                    {loading
                        ? "Signing In..."
                        : "Sign In"}

                </button>


                {/* OPTIONS */}

                <div className="login-options">

                    <label>

                        <input
                            type="checkbox"
                        />

                        <span>
                            Remember me
                        </span>

                    </label>


                    <button
                        type="button"
                        className="help-button"
                    >
                        Need help?
                    </button>

                </div>


                {/* SIGN UP */}

                <div className="signup-section">

                    <span>
                        New to this project?
                    </span>


                    <button type="button">
                        Sign up now.
                    </button>

                </div>


                {/* INFORMATION */}

                <p className="captcha-text">

                    FlixUp - Watch TV Shows & Movies Online!!Comming Soon

                </p>

            </form>

        </div>
    );
}

export default LoginForm;