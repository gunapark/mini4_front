import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField
} from "@mui/material";

function Edit({ books, mode }) {
    const { id } = useParams();
    const book = books.find(b => b.id === parseInt(id));

    const [open, setOpen] = useState(true); // 페이지 들어오면 모달 자동 열림
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);

    if (!book) return <div>책을 찾을 수 없습니다.</div>;



    const handleSave = async () => {
        const payload = mode === "put"
            ? { ...book, title, author, description }
            : { title };

        await fetch(`/api/books/${book.id}`, {
            method: mode === "put" ? "PUT" : "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        setOpen(false); // 저장 후 모달 닫기
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>책 수정</DialogTitle>
            <DialogContent>
                <TextField
                    label="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                {mode === "put" && (
                    <>
                        <TextField
                            label="저자"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="설명"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            margin="dense"
                            multiline
                            rows={3}
                        />
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>취소</Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    저장
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default Edit;