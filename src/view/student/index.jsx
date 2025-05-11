import {
    useEffect,
    useState
} from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function StudentHome() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between mb-4">
                <TextField
                    className="w-2/3"
                    label="搜索实验名"
                    variant="outlined"
                />
            </div>

            <div className="mb-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigate("/course-list")}
                >
                    在线实验
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                    onClick={() => navigate("/history")}
                >
                    个人实验情况
                </button>
            </div>
        </div>
    );
}