import React from 'react';
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  useColorScheme,
} from 'react-native';
import Modal from 'react-native-modal';
import { darkTheme, lightTheme } from '../styles/theme';

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AddTaskModal = ({ visible, onClose, children }: AddTaskModalProps) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      backdropOpacity={0.4}
      avoidKeyboard
      style={styles.modal}
    >
      <KeyboardAvoidingView
        style={[styles.modalContainer, { backgroundColor: theme.card }]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {children}
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
});
