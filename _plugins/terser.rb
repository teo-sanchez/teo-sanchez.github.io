require 'terser'
require 'sprockets'

Sprockets.register_transformer 'application/javascript', 'application/javascript', Terser
Sprockets.register_mime_type 'application/javascript', extensions: ['.js'], charset: :unicode

Sprockets.register_bundle_processor 'application/javascript', Terser::BundleProcessor

Jekyll::Assets::Hook.register :env, :init do |env|
  env.register_bundle_processor 'application/javascript', Terser::BundleProcessor
end
