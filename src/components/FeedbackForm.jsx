import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import formImage from "./../assets/person.png";

const FeedbackForm = () => {
    const { t } = useTranslation("global");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [state, handleSubmit] = useForm("mqazaqpb");

    const customHandleSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e);
        if (state.succeeded) {
            // Очистка формы после отправки
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        }
    };

    return (
        <div className="container">
            <div className="feedback-form-container">
                <div className="form-title">
                    <h2>{t("form.title")}</h2>
                    <img src={formImage} alt="" />
                </div>
                <form onSubmit={customHandleSubmit} className="form">
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
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="form-box">
                        <label htmlFor="phone">
                            {t("form.phone")}
                            <span>*</span>
                        </label>
                        <input
                            type="phone"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button type="submit" className="form-btn" disabled={state.submitting}>
                        {t("form.btn")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
