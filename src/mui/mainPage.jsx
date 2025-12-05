// src/pages/MainPage.jsx
import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function MainPage() {
    return (
        <Box
            sx={{
                width: "100vw",
                minHeight: "calc(100vh - 64px)",

                // ✨ 파스텔 핑크 + 옅은 살구 그라데이션
                background:
                    "linear-gradient(135deg, #fde2e4 0%, #fad4d8 40%, #f9c6d0 100%)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 6,
            }}
        >
            <Box sx={{ width: "100vw", px: { xs: 2, sm: 4, md: 6 } }}>
                {/* 메인 타이틀 */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: "#b84e6b",
                            mb: 1.5,
                            textShadow: "0 2px 6px rgba(0,0,0,0.05)",
                        }}
                    >
                        나만의 도서 관리
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "#7a4a58", fontSize: 15, opacity: 0.8 }}
                    >
                        책 목록을 확인하고, 새로운 책을 등록해 보세요.
                    </Typography>
                </Box>

                {/* 두 개의 기능 카드 */}
                <Grid container spacing={3}>
                    {/* 도서 목록 조회 카드 */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            component={Link}
                            to="/books"
                            elevation={6}
                            sx={{
                                textDecoration: "none",
                                borderRadius: 4,
                                p: 4,
                                height: "100%",

                                // 📗 부드러운 살구 핑크 박스
                                background:
                                    "linear-gradient(135deg, #ffe5ec 0%, #ffdce5 100%)",
                                border: "1px solid rgba(255,182,193,0.6)",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",

                                transition: "0.2s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <LibraryBooksIcon
                                    sx={{ fontSize: 40, color: "#d06f8e", mb: 1 }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#9c3e55",
                                        mb: 1,
                                    }}
                                >
                                    도서 목록 조회
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#8a5666" }}>
                                    등록된 책들을 한눈에 확인해보세요.
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "right" }}>
                                <Button
                                    size="medium"
                                    endIcon={<LibraryBooksIcon />}
                                    sx={{
                                        color: "#c05678",
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                >
                                    목록 보기
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* 새 도서 등록 카드 */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            component={Link}
                            to="/register"
                            elevation={6}
                            sx={{
                                textDecoration: "none",
                                borderRadius: 4,
                                p: 4,
                                height: "100%",

                                // 📘 부드러운 피치 + 핑크 조합
                                background:
                                    "linear-gradient(135deg, #ffe8d6 0%, #ffd7ba 100%)",
                                border: "1px solid rgba(255,204,170,0.6)",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",

                                transition: "0.2s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <AddCircleOutlineIcon
                                    sx={{ fontSize: 40, color: "#c77d5c", mb: 1 }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 700, color: "#9c5a3c", mb: 1 }}
                                >
                                    새 도서 등록
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#7d4a31" }}>
                                    책을 등록해 나만의 서재를 만들어보세요.
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "right" }}>
                                <Button
                                    size="medium"
                                    endIcon={<AddCircleOutlineIcon />}
                                    sx={{
                                        color: "#c7744d",
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                >
                                    등록하기
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
