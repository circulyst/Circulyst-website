/**
 * Device detection utility functions
 * Detects mobile platform, browser, and device type information
 */

export interface DeviceInfo {
  platform: 'ios' | 'android' | 'desktop' | 'unknown';
  browser: string;
  isMobile: boolean;
  userAgent: string;
}

/**
 * Detects the device platform based on user agent
 * @returns DeviceInfo object with platform, browser, and mobile status
 */
export function detectDevice(): DeviceInfo {
  // Get user agent string
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
  
  // Detect iOS devices
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  // Detect Android devices
  const isAndroid = /Android/.test(userAgent);
  
  // Detect mobile devices
  const isMobile = isIOS || isAndroid || /Mobile|mini|Fennec|Opera Mobi/.test(userAgent);
  
  // Determine platform
  let platform: DeviceInfo['platform'] = 'unknown';
  if (isIOS) {
    platform = 'ios';
  } else if (isAndroid) {
    platform = 'android';
  } else if (!isMobile) {
    platform = 'desktop';
  }
  
  // Detect browser
  let browser = 'unknown';
  if (userAgent.includes('Chrome')) {
    browser = 'Chrome';
  } else if (userAgent.includes('Firefox')) {
    browser = 'Firefox';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browser = 'Safari';
  } else if (userAgent.includes('Edge')) {
    browser = 'Edge';
  } else if (userAgent.includes('Opera')) {
    browser = 'Opera';
  }
  
  return {
    platform,
    browser,
    isMobile,
    userAgent
  };
}

/**
 * Gets a human-readable device description
 * @param deviceInfo - Device information object
 * @returns Formatted string describing the device
 */
export function getDeviceDescription(deviceInfo: DeviceInfo): string {
  const { platform, browser, isMobile } = deviceInfo;
  
  if (platform === 'ios') {
    return `iOS device (${browser})`;
  } else if (platform === 'android') {
    return `Android device (${browser})`;
  } else if (platform === 'desktop') {
    return `Desktop (${browser})`;
  } else {
    return `Mobile device (${browser})`;
  }
}
