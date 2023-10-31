import React, { useCallback, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Camera as RNVCamera,
  useCameraDevice,
  useCameraPermission,
  useMicrophonePermission,
  CameraDevice,
} from 'react-native-vision-camera';
import { Button } from '../Button';

type CameraProps = {};

export function Camera(props: CameraProps): JSX.Element {
  console.log(
    'Camera props',
    JSON.stringify(
      props,
      (key, val) => {
        return typeof val === 'function' ? val + '' : val;
      },
      4,
    ),
  );
  // const [device, setDevice] = useState<CameraDevice>('back');
  const cameraRef = useRef<RNVCamera>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [position, setPosition] = useState<'front' | 'back'>('back');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const device: CameraDevice = useCameraDevice('front', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });
  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const {
    hasPermission: hasMicrophonePermission,
    requestPermission: requestMicrophonePermission,
  } = useMicrophonePermission();

  useCallback(() => {
    console.log('hasCameraPermission', hasCameraPermission);
    if (!hasCameraPermission) {
      requestCameraPermission();
    }
    console.log('hasMicrophonePermission', hasMicrophonePermission);
    if (!hasMicrophonePermission) {
      console.log('requesting microphone permission');
      requestMicrophonePermission();
    }
  }, []);
  //   hasCameraPermission,
  //   hasMicrophonePermission,
  //   requestCameraPermission,
  //   requestMicrophonePermission,
  // ]);

  // console.log('device', device);
  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return (
      <View>
        <Text>Camera or Microphone Permission Not Granted</Text>
        <Button
          title='Request Camera Permission'
          onPress={async () => {
            console.log('requesting camera permission');
            try {
              const camResponse = await requestCameraPermission();
              console.log('requestCameraPermission response', camResponse);
              try {
                const micResponse = await requestMicrophonePermission();
                console.log(
                  'requestMicrophonePermission response',
                  micResponse,
                );
              } catch (e) {
                console.log('requestMicrophonePermission error', e);
              }
            } catch (e) {
              console.log('requestCameraPermission error', e);
            }
          }}
        />
      </View>
    );
  }

  function handleOnInitialized() {
    console.log('===>>> handleOnInitialized');
    setIsActive(true);
  }

  return (
    <View>
      <RNVCamera
        style={{ width: '100%', height: '100%' }}
        // style={{ ...StyleSheet.absoluteFill, backgroundColor: 'transparent' }}
        ref={cameraRef}
        device={device}
        isActive={isActive}
        onInitialized={handleOnInitialized}
        photo={true}
        video={true}
        audio={true}
        codeScanner={{
          codeTypes: [
            'code-128',
            'code-39',
            'code-93',
            'codabar',
            'ean-13',
            'ean-8',
            'itf',
            'upc-e',
            'qr',
            'pdf-417',
            'aztec',
            'data-matrix',
          ],
          onCodeScanned: codes => {
            console.log(codes);
          },
        }}
      />
    </View>
  );
}
