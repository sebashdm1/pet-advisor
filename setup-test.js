import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import '@testing-library/jest-native'

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)
