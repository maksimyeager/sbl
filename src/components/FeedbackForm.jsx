import { useState } from "react";
import { useTranslation } from "react-i18next";
import formImage from "./../assets/person.png";

const FeedbackForm = () => {
    const { t } = useTranslation("global");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            message: "",
        });
        console.log("Form submitted:", formData);
    };

    return (
        <div className="container">
            <div className="feedback-form-container">
                <div className="form-title">
                    <h2>{t("form.title")}</h2>
                    <img src={formImage} alt="" />
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-box">
                        <label htmlFor="name">
                            {t("form.name")}
                            <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="email">
                            {t("form.email")}
                            <span>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="message">
                            {t("form.message")}
                            <span>*</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="form-btn">
                        {t("form.btn")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
