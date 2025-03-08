import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ maxWidth: 400, backgroundColor: "#1e1e1e", color: "#fff" }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff", fontWeight: "bold" }}>
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#ddd", fontSize: "16px" }} component={"span"}>
                            <p>🌡️ Temperature: {info.temp}&deg;C</p>
                            <p>💧 Humidity: {info.humidity}%</p>
                            <p>📉 Min Temp: {info.tempMin}&deg;C</p>
                            <p>📈 Max Temp: {info.tempMax}&deg;C</p>
                            <p>🌥️ Condition: <i style={{ color: "#ffcc00" }}>{info.weather}</i></p>
                            <p>🤗 Feels Like: {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
