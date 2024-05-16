import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './../../utils/api';

// api'dan dil verilerini alıp store'a dispatch edicek asenkron thunk askiyonu
export const getLanguages = createAsyncThunk(
  'language/getLanguages',
  async () => {
    const res = await api.get('/getLanguages');

    return res.data.data.languages;
  }
);

// apidan çeviri sonucunu alır
export const translateText = createAsyncThunk(
  'translate/translateText',
  async (p) => {
    // api'a gönderilcek parametreleri belirle
    const params = new URLSearchParams();
    params.set('source_language', p.sourceLang.value);
    params.set('target_language', p.targetLang.value);
    params.set('text', p.text);

    // api'a gönderilcek header'ı belirle
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
    };

    // api isteği at
    const res = await api.post('/translate', params, { headers });

    // aksiyonun payload'ını return ediyoruz
    return res.data.data.translatedText;
  }
);
