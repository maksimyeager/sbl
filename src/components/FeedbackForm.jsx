import { useState } from "react";

const FeedbackForm = () => {
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
        <div className="feedback-form-container">
            <h2 className="title-2">
                Нуждаетесь в наших услугах? Напишите нам через форму обратной
                связи
            </h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-box">
                    <label htmlFor="name">Ваше имя</label>
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
                    <label htmlFor="email">Ваш E-mail</label>
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
                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="form-btn">
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
