import { useState, useEffect } from 'react'
import { 
  Play, Facebook, Youtube, Instagram, Twitter, 
  Heart, Share2, MessageCircle, PawPrint, 
  Sparkles, Laugh, Star, TrendingUp, Users, Video
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { toast } from 'sonner'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showVideoDialog, setShowVideoDialog] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWatchVideo = (videoTitle: string) => {
    setSelectedVideo(videoTitle)
    setShowVideoDialog(true)
  }

  const handleSubscribe = () => {
    window.open('https://facebook.com', '_blank')
    toast.success('Opening Facebook Page!')
  }

  const handleFollow = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
    window.open(urls[platform], '_blank')
    toast.success(`Following on ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Doggy Drama Club',
        text: 'Check out these hilarious Chihuahua & Pitbull comedy videos!',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link copied to clipboard!')
    }
  }

  const videos = [
    { id: 1, title: 'Chihuahua vs Pitbull: The Standoff', views: '1.2M', likes: '45K', duration: '0:45' },
    { id: 2, title: 'Tiny Boss Big Dreams', views: '890K', likes: '32K', duration: '1:12' },
    { id: 3, title: 'Pitbull Gets Pranked!', views: '2.1M', likes: '78K', duration: '0:58' },
    { id: 4, title: 'Breakfast Drama Episode 5', views: '650K', likes: '24K', duration: '2:05' },
    { id: 5, title: 'The Great Treat Heist', views: '1.5M', likes: '52K', duration: '1:30' },
    { id: 6, title: 'Naptime Negotiations', views: '420K', likes: '18K', duration: '0:38' },
  ]

  const stats = [
    { icon: Users, value: '500K+', label: 'Followers' },
    { icon: Video, value: '200+', label: 'Videos' },
    { icon: Heart, value: '10M+', label: 'Likes' },
    { icon: TrendingUp, value: '50M+', label: 'Views' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a0b2e]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <PawPrint className="w-6 h-6 md:w-7 md:h-7 text-[#1a0b2e]" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-white font-['Fredoka']">
                Doggy <span className="text-yellow-400">Drama</span> Club
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-white/80 hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-yellow-400 transition-colors">About</a>
              <a href="#videos" className="text-white/80 hover:text-yellow-400 transition-colors">Videos</a>
              <a href="#stars" className="text-white/80 hover:text-yellow-400 transition-colors">Stars</a>
              <Button onClick={handleSubscribe} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                <Facebook className="w-4 h-4 mr-2" />
                Follow Page
              </Button>
            </div>
            <Button onClick={handleSubscribe} className="md:hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3">
              <Facebook className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white/80">The Funniest Dog Comedy Channel</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 font-['Fredoka']">
                Where <span className="text-gradient">Chihuahua</span> Meets{' '}
                <span className="text-gradient">Pitbull</span> Drama!
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
                Get ready for the most hilarious dog comedy videos on the internet! 
                Watch our tiny Chihuahua boss around our gentle giant Pitbull in epic daily dramas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-[#1a0b2e] font-bold text-lg px-8 py-6 rounded-full animate-pulse-glow"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Videos
                </Button>
                <Button 
                  onClick={handleSubscribe}
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Follow on Facebook
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-yellow">
                <img 
                  src="/hero-dogs.jpg" 
                  alt="Chihuahua and Pitbull Comedy" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e]/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-wiggle">
                      <Laugh className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">New Video Every Day!</div>
                      <div className="text-white/60 text-sm">Subscribe for daily laughs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400/30 rounded-full blur-xl animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">About Our Channel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Fredoka']">
              The <span className="text-gradient">Ultimate</span> Dog Comedy Show
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Doggy Drama Club brings you the most entertaining content featuring 
              the unlikeliest duo - a sassy Chihuahua and a gentle Pitbull!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Laugh, 
                title: 'Daily Comedy', 
                desc: 'New hilarious videos every single day featuring our furry stars!',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: Heart, 
                title: 'Family Friendly', 
                desc: 'Clean comedy that the whole family can enjoy together!',
                color: 'from-pink-500 to-rose-500'
              },
              { 
                icon: Share2, 
                title: 'Viral Content', 
                desc: 'Join millions of viewers who love our dog drama series!',
                color: 'from-purple-500 to-indigo-500'
              },
            ].map((item, index) => (
              <div key={index} className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="videos" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Video className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Latest Videos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Fredoka']">
              Trending <span className="text-gradient">Comedy</span> Videos
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Watch our most popular Chihuahua vs Pitbull comedy moments!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="glass rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-pink-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
                         onClick={() => handleWatchVideo(video.title)}>
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white">
                    {video.duration}
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 rounded text-xs text-white font-bold">
                    NEW
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" /> {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> {video.likes}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                      onClick={() => handleWatchVideo(video.title)}
                    >
                      Watch
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-full text-lg"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Watch More on Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Stars Section */}
      <section id="stars" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <PawPrint className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Our Stars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Fredoka']">
              Meet the <span className="text-gradient">Drama</span> Queens
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              The dynamic duo that brings laughter to millions every day!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chihuahua Card */}
            <div className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 group-hover:border-yellow-400 transition-colors">
                  <img 
                    src="/chihuahua.jpg" 
                    alt="Chihuahua" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#1a0b2e]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Fredoka']">The Tiny Boss</h3>
              <p className="text-yellow-400 font-medium mb-4">Chihuahua Extraordinaire</p>
              <p className="text-white/60 mb-6">
                Small in size but HUGE in attitude! This little drama queen runs the house 
                and keeps everyone on their toes with her sassy antics.
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">5</div>
                  <div className="text-xs text-white/60">Years Old</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">2kg</div>
                  <div className="text-xs text-white/60">Weight</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/60">Attitude</div>
                </div>
              </div>
            </div>

            {/* Pitbull Card */}
            <div className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-pink-400/50 group-hover:border-pink-400 transition-colors">
                  <img 
                    src="/pitbull.jpg" 
                    alt="Pitbull" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#1a0b2e]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Fredoka']">The Gentle Giant</h3>
              <p className="text-pink-400 font-medium mb-4">Pitbull Sweetheart</p>
              <p className="text-white/60 mb-6">
                A big softie with a heart of gold! Despite his size, he's the most 
                patient and loving companion to his tiny boss.
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">3</div>
                  <div className="text-xs text-white/60">Years Old</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">30kg</div>
                  <div className="text-xs text-white/60">Weight</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/60">Gentle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
            <Share2 className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Fredoka']">
            Follow <span className="text-gradient">Doggy Drama</span> Club
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Don't miss out on daily laughs! Follow us on all platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-700', followers: '500K+' },
              { icon: Youtube, name: 'YouTube', color: 'from-red-600 to-red-700', followers: '200K+' },
              { icon: Instagram, name: 'Instagram', color: 'from-purple-600 to-pink-600', followers: '150K+' },
              { icon: Twitter, name: 'Twitter', color: 'from-sky-500 to-blue-500', followers: '80K+' },
            ].map((social, index) => (
              <button
                key={index}
                onClick={() => handleFollow(social.name.toLowerCase())}
                className={`glass rounded-2xl p-6 hover:bg-gradient-to-br ${social.color} transition-all duration-300 group text-left`}
              >
                <social.icon className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-white font-bold">{social.name}</div>
                <div className="text-white/70 text-sm">{social.followers} followers</div>
              </button>
            ))}
          </div>

          <div className="mt-10">
            <Button 
              onClick={handleShare}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share This Page
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <MessageCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Fredoka']">
              Never Miss a Video!
            </h2>
            <p className="text-white/60 mb-6">
              Subscribe to get notified when we post new comedy videos featuring our furry stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-400"
              />
              <Button 
                onClick={() => toast.success('Subscribed successfully!')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-[#1a0b2e] font-bold px-8 py-4 rounded-full"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-[#1a0b2e]" />
                </div>
                <span className="text-xl font-bold text-white font-['Fredoka']">
                  Doggy <span className="text-yellow-400">Drama</span> Club
                </span>
              </div>
              <p className="text-white/60 mb-4 max-w-sm">
                Bringing joy and laughter to millions through the hilarious antics 
                of our beloved Chihuahua and Pitbull duo.
              </p>
              <div className="flex gap-3">
                {[Facebook, Youtube, Instagram, Twitter].map((Icon, index) => (
                  <button
                    key={index}
                    onClick={() => handleFollow(['facebook', 'youtube', 'instagram', 'twitter'][index])}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#1a0b2e] transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Videos', 'Stars', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-white/60 hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => toast.info('Coming soon!')}
                      className="text-white/60 hover:text-yellow-400 transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Doggy Drama Club. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for dog lovers
            </p>
          </div>
        </div>
      </footer>

      {/* Video Dialog */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="bg-[#2d1b4e] border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-['Fredoka']">{selectedVideo}</DialogTitle>
            <DialogDescription className="text-white/60">
              Watch this hilarious video on our Facebook page!
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
              <p className="text-white/70">Video available on Facebook</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Watch on Facebook
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowVideoDialog(false)}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
