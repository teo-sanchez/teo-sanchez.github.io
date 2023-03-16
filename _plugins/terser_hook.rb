require 'jekyll-assets'
require 'jekyll-assets/uglifier'
require 'terser'

class TerserCompressor < Sprockets::UglifierCompressor
  def initialize(options = {})
    @options = options
  end

  def call(input)
    data = input[:data]
    options = @options.merge(input[:metadata].fetch(:uglifier, {}))
    result = Terser.minify(data, options)
    {
      data: result.code,
      metadata: input[:metadata].merge(map: result.source_map)
    }
  end
end

Jekyll::Assets::Hook.register :config, :before_merge do |config|
  config["compressors"]["js"] = "TerserCompressor"
  Sprockets.register_compressor "application/javascript", TerserCompressor
end
