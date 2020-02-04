
  Pod::Spec.new do |s|
    s.name = 'CapacitorKeyguardManager'
    s.version = '0.0.1'
    s.summary = 'Andorid Keyguard Manager'
    s.license = 'MIT'
    s.homepage = 'https://github.com/mccs0064/capacitor-keyguard-manager'
    s.author = 'steven mucci'
    s.source = { :git => 'https://github.com/mccs0064/capacitor-keyguard-manager', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end