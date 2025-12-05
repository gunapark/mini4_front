import React from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {mockData} from "../data/MockData.js";

function Data(title, author, category, description, cover_image, publisher, publish_date) {
    return {title, author, category, description, cover_image, publisher, publish_date};
}

const rows = [
    Data('소년이 온다',
        '소설',
        '한강',
        '동호네 집에서 함께 살던 단짝 정대와 함께 민주화운동을 하던 어느날 정대가 총을 맞아 쓰러진다. 이 광경을 본 동호는 친구를 돕고 싶었지만 가면 자신도 죽을 것이라는 것을 알고 도망간다. 죄책감에 시달리던 동호는...',
        '이미지', // 이미지 파일 추가
        '창비',
        '2014.05.19')
];

export default function Detail() {
    const data = rows[0];

    const [mod, setMod] = React.useState('');

    const handleChange = (event) => {
        setMod(event.target.value);
    };

    return (
        <>
            <div style={{textAlign: 'center', marginTop: '3rem', marginBottom: '1rem', }}>
                <h1> 세부 정보 </h1>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', marginTop: '3rem' }}>
                    <Box
                        component="img"
                        src={mockData.img} // 책 표지 이미지 URL
                        alt="cover_image"
                        sx={{ width: '500px', height: 'auto', marginTop:'3rem', }}
                    />
                    <table style={{borderCollapse: 'collapse', width: '100%', }}>
                        <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '0.5rem', textAlign: 'center', }}>
                                제목</td>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'left', }}>
                                {mockData.title}</td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'center', }}>
                                범주</td>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'left', }}>
                                {mockData.category}</td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'center', }}>
                                저자</td>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'left', }}>
                                {mockData.author}</td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'center', }}>
                                내용</td>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'left', }}>
                                {data.description.length > 100 ? data.description.substring(0, 100) + '...' : data.description}
                            </td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'center', }}>
                                출판사</td>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'left', }}>
                                {data.publisher}</td>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'center', }}>
                                출판일자</td>
                            <td style={{border: '1px solid #ccc', padding: '0.5rem', textAlign: 'left', }}>
                                {data.publish_date}</td>
                        </tr>
                        </tbody>
                    </table>
                </Box>
            </div>

            <Box sx={{ minWidth: 120, marginTop: '5rem' }}>
                <Typography variant="body1" align="center" sx={{ fontSize: '22px', marginBottom: '1rem' }}>
                    주어진 정보를 학습하여 AI 표지 생성이 가능합니다. 생성 모델을 선택하세요.
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label" shrink>
                        <SmartToyIcon sx={{marginTop: '0.2rem' }} />
                        생성 모델 선택
                    </InputLabel>
                    <Select
                        style={{textAlign: 'left'}}
                        labelId="simple-select-label"
                        id="simple-select"
                        value={mod}
                        label="생성 모델 선택"
                        onChange={handleChange}
                    >
                        <MenuItem value='DALL·E 2 (기본)'>DALL·E 2 (기본)</MenuItem>
                        <MenuItem value='DALL·E 3 (고품질)'>DALL·E 3 (고품질)</MenuItem>
                        <MenuItem value='GPT Image 1 (최신)'>GPT Image 1 (최신)</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', marginTop: '3rem' }}>
                <Box
                    component="img"
                    src="" // 책 표지 이미지 URL
                    alt=""
                    sx={{ width: '500px', height: 'auto', marginTop:'3rem', marginRight: '2rem' }}
                />
                <Box>
                    <Box sx={{fontSize: '40px', marginTop:'3rem'}}> 내용 </Box>
                    <Box sx={{fontSize: '18px'}}>{data.description}</Box>
                </Box>
            </Box>
        </>
    );
}