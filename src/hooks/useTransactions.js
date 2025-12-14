import { useState, useEffect } from 'react';
import api from '../services/api';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 1
  });

  const fetchTransactions = async (page = 1, limit = 50) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get(`/transactions?page=${page}&limit=${limit}`);
      
      setTransactions(response.data.transactions || []);
      setPagination(response.data.pagination || {
        page: 1,
        limit,
        total: response.data.count || 0,
        pages: 1
      });
      
      return { success: true, data: response.data };
      
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to fetch transactions';
      setError(errorMsg);
      console.error('Fetch transactions error:', err);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const addTransaction = async (transactionData) => {
    try {
      setLoading(true);
      const response = await api.post('/transactions', transactionData);
      
      // Add new transaction to state
      setTransactions(prev => [response.data.transaction, ...prev]);
      
      // Update summary counts
      setPagination(prev => ({
        ...prev,
        total: prev.total + 1
      }));
      
      return { success: true, data: response.data };
      
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to add transaction';
      console.error('Add transaction error:', err);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const updateTransaction = async (id, transactionData) => {
    try {
      setLoading(true);
      const response = await api.put(`/transactions/${id}`, transactionData);
      
      // Update transaction in state
      setTransactions(prev => 
        prev.map(t => t._id === id ? response.data.transaction : t)
      );
      
      return { success: true, data: response.data };
      
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to update transaction';
      console.error('Update transaction error:', err);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      setLoading(true);
      const response = await api.delete(`/transactions/${id}`);
      
      // Remove transaction from state
      setTransactions(prev => prev.filter(t => t._id !== id));
      
      // Update summary counts
      setPagination(prev => ({
        ...prev,
        total: prev.total - 1
      }));
      
      return { success: true, data: response.data };
      
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to delete transaction';
      console.error('Delete transaction error:', err);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error,
    pagination,
    fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction
  };
};