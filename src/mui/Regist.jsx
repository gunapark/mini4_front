import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import HttpIcon from '@mui/icons-material/Http';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import {useState} from "react";

export default function Regist() {
    const [form, setForm] = useState({
        title: '',
        author: '',
        description: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <Box sx={{position: 'static', textAlign: 'center', mb: 7}}>
                <Typography variant="h3" component="h3">
                    <MenuBookIcon sx={{ fontSize: '2rem', marginRight: '1rem' }} />
                    새 도서 등록
                </Typography>
            </Box>

            <Box sx={{position: 'static', textAlign: 'left', mb: 2}}>
                <Typography variant="h5" component="h5">
                    <BookIcon sx={{ fontSize: '2rem', mb: -1, marginLeft: '1rem', marginRight: '1rem' }} />
                    || 책 제목
                </Typography>
            </Box>

            <Box sx={{ width: 400, maxWidth: '100%', mb: 5, color: "white"}}>
                <TextField fullWidth label="제목을 입력하세요"
                           name="title"
                           value={form.title}
                           onChange={handleChange}
                />
            </Box>

            <Box sx={{position: 'static', textAlign: 'left', mb: 2}}>
                <Typography variant="h5" component="h5">
                    <HttpIcon sx={{ fontSize: '3rem', mb: -2, marginRight: '1rem' }} />
                    ||  표지 이미지 URL
                </Typography>
            </Box>

            <Box sx={{ width: 800, maxWidth: '100%', mb: 5}}>
                <TextField fullWidth label="URl을 입력하세요" id="url" />
            </Box>

            <Box sx={{position: 'static', textAlign: 'left'}}>
                <Typography variant="h5" component="h5">
                    <BorderColorIcon sx={{ fontSize: '2rem', mb: -1, marginLeft: '1rem', marginRight: '1rem' }} />
                    || 내용
                </Typography>
            </Box>

            <Box sx={{position: 'static', textAlign: 'center', width: 800, maxWidth: '100%', mb: 5, mt: 3}}>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="내용을 입력하세요"
                    style={{
                        width: '100%',
                        fontSize: '16px',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box'
                    }}
                />
            </Box>

            <Box display="flex" justifyContent="flex-end">
                <ButtonGroup aria-label="Loading button group">
                    <Button variant="contained">저장</Button>
                    <Button variant="outlined">취소</Button>
                    <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
                        저장중인 모습
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    );
}