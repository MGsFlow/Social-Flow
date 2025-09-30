import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Post {
  id: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked: boolean;
  isAd: boolean;
  adData?: {
    brand: string;
    cta: string;
    ctaUrl: string;
    adId: string;
  };
}

export interface AppState {
  posts: Post[];
  currentUser: {
    username: string;
    avatar: string;
  };
  isLoading: boolean;
  isHydrated: boolean;
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  likePost: (postId: string) => void;
  setLoading: (loading: boolean) => void;
  setHydrated: (hydrated: boolean) => void;
  trackAdClick: (adId: string, adData: any) => void;
  trackAdView: (adId: string, adData: any) => void;
}

export const useStore = create<AppState>((set, get) => ({
  posts: [],
  currentUser: {
    username: 'user123',
    avatar: 'https://via.placeholder.com/40x40/6366F1/FFFFFF?text=U',
  },
  isLoading: false,
  isHydrated: false,
  
  setPosts: (posts) => set({ posts }),
  
  addPost: (post) => set((state) => ({ 
    posts: [post, ...state.posts] 
  })),
  
  likePost: (postId) => set((state) => ({
    posts: state.posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    )
  })),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setHydrated: (hydrated) => set({ isHydrated: hydrated }),
  
  trackAdClick: (adId, adData) => {
    // GA4 이벤트 추적
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_click', {
        ad_id: adId,
        ad_brand: adData.brand,
        ad_cta: adData.cta,
        event_category: 'advertising',
        event_label: 'ad_click'
      });
    }
    
    // DataLayer에 이벤트 추가
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'ad_click',
        ad_id: adId,
        ad_brand: adData.brand,
        ad_cta: adData.cta,
        timestamp: new Date().toISOString()
      });
    }
  },
  
  trackAdView: (adId, adData) => {
    // GA4 이벤트 추적
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_view', {
        ad_id: adId,
        ad_brand: adData.brand,
        event_category: 'advertising',
        event_label: 'ad_view'
      });
    }
    
    // DataLayer에 이벤트 추가
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'ad_view',
        ad_id: adId,
        ad_brand: adData.brand,
        timestamp: new Date().toISOString()
      });
    }
  },
}));
