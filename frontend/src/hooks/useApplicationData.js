import { useReducer, useEffect } from 'react';
// import { useState } from 'react';

// Define your action types
export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA', // New action to set photo data
  SET_TOPIC_DATA: 'SET_TOPIC_DATA', // New action to set topic data
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS', // New action to get photos by topics
  SEARCH_PHOTOS: 'SEARCH_PHOTOS',
  TYPE_SEARCH: 'TYPE_SEARCH'
};

// Define your initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritedPhotos: [],
  photoData: [], // New state for photo data
  topicData: [], // New state for topic data
  selectedTopicPhotos: [], // New state for selectedTopicPhoto
  searchResults: [],
  searchFormInput: ''
};

// Define your reducer function
const reducer = function(state, action) {

  let photoId;

  switch (action.type) {
  case ACTIONS.TOGGLE_FAVORITE:
    photoId = action.payload;
    if (state.favoritedPhotos.includes(photoId)) {
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(favoritedPhotoId => favoritedPhotoId !== photoId)
      };
    } else {
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, photoId],
      };
    }

  case ACTIONS.SET_SELECTED_PHOTO:
    return {
      ...state,
      selectedPhoto: action.payload,
    };

  case ACTIONS.OPEN_MODAL:
    return {
      ...state,
      isModalOpen: true,
    };

  case ACTIONS.CLOSE_MODAL:
    return {
      ...state,
      isModalOpen: false,
    };

  case ACTIONS.SET_PHOTO_DATA: // New case to set photo data
    return {
      ...state,
      photoData: action.payload,
    };

  case ACTIONS.SET_TOPIC_DATA: // New case to set topic data
    return {
      ...state,
      topicData: action.payload,
    };

  case ACTIONS.GET_PHOTOS_BY_TOPICS: // New case to get photos by topics
    return {
      ...state,
      selectedTopicPhotos: action.payload,
    };

  case ACTIONS.SEARCH_PHOTOS: // New case to get photos by topics
    return {
      ...state,
      searchResults: action.payload,
    };

  case ACTIONS.TYPE_SEARCH: // New case to get photos by topics
    return {
      ...state,
      searchFormInput: action.payload,
    };


  default:
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Define functions to dispatch actions
  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
  };

  const isSelected = (id) => {
    return state.favoritedPhotos.includes(id);
  };

  const openModal = (photoData) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photoData });
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const getPhotosByTopics = (topicId) => {
    dispatch({ type: ACTIONS.SEARCH_PHOTOS, payload: [] });
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
      });
  };

  const searchPhotos = (searchValue) => {
    fetch(`/api/search/?query=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SEARCH_PHOTOS, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
      });
  };

  const setSearchFormInput = (data) => {
    dispatch({ type: ACTIONS.TYPE_SEARCH, payload: data });
  };

  // Effect to fetch photo data snd topic data
  useEffect(() => {
    const fetchPhotoData = fetch('/api/photos').then((res) => res.json());
    const fetchTopicData = fetch('api/topics').then((res) => res.json());

    Promise.all([fetchPhotoData, fetchTopicData])
      .then(([photoData, topicData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
      });
  }, []); // Empty dependency array for initial fetch

  return {
    ...state,
    toggleFavorite,
    isSelected,
    openModal,
    closeModal,
    getPhotosByTopics,
    searchPhotos,
    setSearchFormInput
  };
}