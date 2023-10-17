const fetchData = async (setData, apiCall) => {
  setData({ loading: true, error: false, data: undefined });

  try {
    const data = await apiCall();
    setData({ loading: false, error: false, data: data });
  } catch (error) {
    setData({ loading: false, error: true, data: undefined });
  }
};

export default fetchData;
