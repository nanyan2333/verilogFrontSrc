import CourseCard from "../../../components/CourseCard";
import coursePng from "../../../assets/img/CarbonCourse.png";
import { useEffect, useState, useMemo } from "react";
import {
    TextField,
    Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HistoryCourse() {
    const [courseList, setCourseList] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const getCourseList = async () => {
        // TODO: get course list from server
        setCourseList([
            {
                id: 1,
                title: "历史实验1",
                description: "这个实验已经结束了",
                teacher: "王小明",
                image: coursePng,
            },
            {
                id: 2,
                title: "历史实验2",
                description: "这个实验已经做过了",
                teacher: "王",
            },
        ]);
    }

    useEffect(() => {
        getCourseList();
    }, []);

    const filteredList = useMemo(() => {
        const lower = search.trim().toLowerCase();
        return courseList.filter((course) =>
            course.title.toLowerCase().includes(lower)
        );
    }, [search, courseList]);

    return (
        <div>
            <div className='flex justify-between mb-4'>
                <TextField
                    className='w-2/3'
                    label='搜索课程名'
                    variant='outlined'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outlined" onClick={() => navigate('/student-home')} color="primary">
                    返回首页
                </Button>
            </div>
            {filteredList.map((item) => (
                <div key={item.id} className='mb-4'>
                    <CourseCard
                        data={item}
                        option={{
                            showButton: true,
                            showImage: true,
                            buttonText: "进入课程",
                            // TODO: 跳转课程页面
                            onClick: () => navigate(`/course/${item.id}`),
                        }}
                    />
                </div>
            ))}
        </div>
    );
}