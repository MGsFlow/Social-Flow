'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  Box,
  Chip,
  Button,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  ShareOutlined,
  MoreHoriz,
} from '@mui/icons-material';
import { Post, useStore } from '@/store/useStore';
import { trackPostLike, trackPostView, trackAdClick, trackAdView } from '@/utils/gtag';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

export default function PostCard({ post, onLike }: PostCardProps) {
  const { isHydrated } = useStore();

  useEffect(() => {
    // 하이드레이션 후에만 실행
    if (isHydrated) {
      // 포스트 조회 추적
      trackPostView(post.id);
      
      // 광고인 경우 광고 조회 추적
      if (post.isAd && post.adData) {
        trackAdView(post.adData.adId, post.adData);
      }
    }
  }, [isHydrated, post.id, post.isAd, post.adData]);

  const handleLike = () => {
    onLike(post.id);
    trackPostLike(post.id, !post.isLiked);
  };

  const handleAdClick = () => {
    if (post.isAd && post.adData) {
      trackAdClick(post.adData.adId, post.adData);
      // 실제 광고 링크로 이동
      window.open(post.adData.ctaUrl, '_blank');
    }
  };

  return (
    <Card 
      sx={{ 
        mb: 2, 
        maxWidth: 600, 
        mx: 'auto',
        border: post.isAd ? '2px solid #E4405F' : 'none',
        position: 'relative'
      }}
    >
      {post.isAd && (
        <Chip
          label="광고"
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            fontSize: '0.7rem',
            height: 20,
          }}
        />
      )}
      
      <CardHeader
        avatar={
          <Avatar
            src={post.userAvatar}
            alt={post.username}
            sx={{ width: 32, height: 32 }}
          />
        }
        title={
          <Typography variant="body2" fontWeight={600}>
            {post.username}
          </Typography>
        }
        action={
          <IconButton size="small">
            <MoreHoriz />
          </IconButton>
        }
        sx={{ pb: 1 }}
      />
      
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 400,
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={handleAdClick}
      >
        <Image
          src={post.imageUrl}
          alt={post.isAd ? `${post.adData?.brand} 광고 - ${post.caption}` : `${post.username}의 포스트 - ${post.caption}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
          }}
          priority={false}
          quality={85}
        />
      </Box>
      
      <CardContent sx={{ pt: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <IconButton onClick={handleLike} size="small">
            {post.isLiked ? (
              <Favorite color="primary" />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
          <IconButton size="small" sx={{ ml: 1 }}>
            <ChatBubbleOutline />
          </IconButton>
          <IconButton size="small" sx={{ ml: 1 }}>
            <ShareOutlined />
          </IconButton>
        </Box>
        
        <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
          {post.likes}명이 좋아합니다
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>{post.username}</strong> {post.caption}
        </Typography>
        
        {post.comments > 0 && (
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ cursor: 'pointer' }}
          >
            댓글 {post.comments}개 모두 보기
          </Typography>
        )}
        
        <Typography variant="caption" color="text.secondary">
          {post.timestamp}
        </Typography>
        
        {post.isAd && post.adData && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAdClick}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
              }}
            >
              {post.adData.cta}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
