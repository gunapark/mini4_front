import React from 'react';
import {
    Typography,
    Box,
    TextField,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";


export default function BookList({ posts }) {

    const list = posts.map((post) => (
        /* 책 목록 정렬*/
        <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",   // 이미지 위, 텍스트 아래
                    boxShadow: 2,
                    borderRadius: 2,
                    height: "100%",
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ height: 200, objectFit: "cover" }}  // 세로형 표지
                        image={post.img || "https://via.placeholder.com/300x200?text=Book"}
                        alt={post.title}
                    />
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.author} :: {post.category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ));

    return (
        <>
            {/* 제목 */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h2">
                    도서 목록
                </Typography>
            </Box>

            {/* 검색창 */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <TextField
                    variant="outlined"
                    placeholder="책 제목을 검색하세요"
                    sx={{
                        mb: 2,
                        width: '100%',
                        borderRadius: 1,
                    }}
                />
            </div>

            {/* 도서 리스트 */}
            <Box sx={{ mt: 3, px: 2 }}>
                {posts.length === 0 ? (
                    <Typography variant="h5" align="center">
                        도서 목록이 비어있습니다.
                    </Typography>
                ) : (
                    <Grid container spacing={2}>
                        {list}
                    </Grid>
                )}
            </Box>
        </>
    );
}
