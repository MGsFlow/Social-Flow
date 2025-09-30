'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, CircularProgress, AppBar, Toolbar } from '@mui/material';
import PostCard from './PostCard';
import LanguageSelector from './LanguageSelector';
import { useStore } from '@/store/useStore';
import { Post } from '@/store/useStore';

// 샘플 데이터
const samplePosts: Post[] = [
  {
    id: '1',
    username: 'tech_innovator',
    userAvatar: 'https://via.placeholder.com/40x40/6366F1/FFFFFF?text=T',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    caption: 'AI 기술로 마케팅을 혁신하는 SocialFlow의 새로운 기능을 소개합니다! 🚀',
    likes: 2847,
    comments: 156,
    timestamp: '2시간 전',
    isLiked: false,
    isAd: false,
  },
  {
    id: '2',
    username: 'socialflow_ai',
    userAvatar: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=S',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    caption: '실시간 광고 성과 분석과 자동 최적화로 ROI를 300% 향상시키세요!',
    likes: 5421,
    comments: 289,
    timestamp: '4시간 전',
    isLiked: true,
    isAd: true,
    adData: {
      brand: 'SocialFlow',
      cta: '무료 체험 시작하기',
      ctaUrl: 'https://socialflow.ai',
      adId: 'socialflow_trial_001',
    },
  },
  {
    id: '3',
    username: 'marketing_pro',
    userAvatar: 'https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=M',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    caption: 'SocialFlow 덕분에 광고 관리가 이렇게 쉬울 줄 몰랐어요! 📈',
    likes: 1923,
    comments: 134,
    timestamp: '6시간 전',
    isLiked: false,
    isAd: false,
  },
  {
    id: '4',
    username: 'brand_insights',
    userAvatar: 'https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=B',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    caption: 'AI 기반 타겟팅으로 정확한 고객에게 도달하는 방법을 알아보세요!',
    likes: 3156,
    comments: 267,
    timestamp: '8시간 전',
    isLiked: false,
    isAd: true,
    adData: {
      brand: 'BrandInsights',
      cta: '인사이트 받기',
      ctaUrl: 'https://brandinsights.ai',
      adId: 'brandinsights_ai_001',
    },
  },
  {
    id: '5',
    username: 'digital_nomad',
    userAvatar: 'https://via.placeholder.com/40x40/EF4444/FFFFFF?text=D',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    caption: 'SocialFlow의 자동화 기능으로 언제 어디서나 마케팅을 관리할 수 있어요! 🌍',
    likes: 2567,
    comments: 198,
    timestamp: '1일 전',
    isLiked: true,
    isAd: false,
  },
];

export default function Feed() {
  const { posts, setPosts, likePost, isLoading, setLoading, isHydrated, setHydrated } = useStore();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, [setHydrated]);

  useEffect(() => {
    // 하이드레이션 후에만 실행
    if (isHydrated && !hasLoaded) {
      setLoading(true);
      // 실제 앱에서는 API 호출
      setTimeout(() => {
        setPosts(samplePosts);
        setLoading(false);
        setHasLoaded(true);
      }, 1000);
    }
  }, [isHydrated, hasLoaded, setPosts, setLoading]);

  if (!isHydrated || isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
            SocialFlow
          </Typography>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="sm" sx={{ py: 2 }}>
        {posts.length === 0 ? (
          <Box textAlign="center" py={4}>
            <Typography variant="h6" color="text.secondary">
              게시물이 없습니다
            </Typography>
          </Box>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={likePost}
            />
          ))
        )}
      </Container>
    </>
  );
}
