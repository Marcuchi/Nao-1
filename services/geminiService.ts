// Chat functionality has been disabled.
// This file is kept to maintain module exports and prevent build errors in unused components.

// Dummy exports to satisfy import requirements without runtime dependencies
export const getChatSession = () => {
  return null;
};

export const sendMessageToSensei = async function* (message: string) {
  // Yield a simple message if somehow invoked
  yield "El chat está deshabilitado temporalmente.";
};
