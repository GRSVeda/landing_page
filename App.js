import React from "react";

// Mock images - replace with your actual imports
const complaintImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M14 9V5a3 3 0 0 0-6 0v4'/%3E%3Crect x='2' y='9' width='20' height='11' rx='2' ry='2'/%3E%3C/svg%3E";
const permissionImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M9 12l2 2 4-4'/%3E%3Cpath d='M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3'/%3E%3C/svg%3E";
const dashboardImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Crect x='3' y='3' width='7' height='7'/%3E%3Crect x='14' y='3' width='7' height='7'/%3E%3Crect x='14' y='14' width='7' height='7'/%3E%3Crect x='3' y='14' width='7' height='7'/%3E%3C/svg%3E";
const letterImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpolyline points='14,2 14,8 20,8'/%3E%3C/svg%3E";
const telegramImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M21 5L2 12.5l7 1L12 21l4.5-9.5L22 9l-1-4z'/%3E%3Cpath d='M22 9l-10 5'/%3E%3C/svg%3E";
const qrCodeImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M3 9h3V6H3v3zm0 4h3v-3H3v3zm4 0h3v-3H7v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm-8-4h3V6H7v3zm4 0h3V6h-3v3zm4 0h3V6h-3v3z'/%3E%3C/svg%3E";

const floatingIcons = ["📚", "💡", "⚡", "📱", "📝", "🎓", "📊", "🌐"];

// Mock navigation - replace with your actual navigation logic
const mockNavigate = (path) => {
  console.log(`Navigating to: ${path}`);
  // In your actual app, replace with: navigate(path);
};

const styles = {
  container: {
    minHeight: '100vh',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  
  backgroundAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%)
    `,
    animation: 'float 20s ease-in-out infinite',
  },
  
  floatingIcons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1,
  },
  
  floatingIcon: {
    position: 'absolute',
    opacity: 0.1,
    animation: 'floatIcon 10s linear infinite',
    userSelect: 'none',
  },
  
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    position: 'relative',
    zIndex: 10,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'white',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  logoIcon: {
    fontSize: '2rem',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  },
  
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  
  profileIcon: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  btnLogin: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  
  hero: {
    padding: '4rem 2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 5,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  heroContent: {
    marginBottom: '4rem',
  },
  
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: 'white',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    textShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  
  heroTitleAccent: {
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  
  heroTitleHighlight: {
    background: 'linear-gradient(45deg, #feca57, #ff9ff3)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  
  heroSubtitle: {
    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
  },
  
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  btnHeroPrimary: {
    background: 'linear-gradient(45deg, #9333ea, #c084fc)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)',
    minWidth: '160px',
  },
  
  btnHeroSecondary: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    minWidth: '160px',
  },
  
  heroCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  
  heroCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left',
  },
  
  heroCardIcon: {
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  
  heroCardContent: {
    color: 'white',
  },
  
  heroCardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: 'white',
  },
  
  heroCardDesc: {
    opacity: 0.8,
    lineHeight: '1.5',
  },
  
  cardImage: {
    width: '30px',
    height: '30px',
    filter: 'invert(1)',
  },
  
  featuresSection: {
    padding: '5rem 2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    zIndex: 5,
  },
  
  featuresContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  featuresTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: '3rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
  },
  
  featureCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '2.5rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  
  featureImage: {
    width: '80px',
    height: '80px',
    filter: 'invert(1)',
    marginBottom: '1.5rem',
  },
  
  featureCardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '1rem',
  },
  
  featureCardDesc: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  
  footer: {
    padding: '3rem 2rem 2rem',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    zIndex: 5,
  },
  
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  
  footerLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  
  copyright: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.9rem',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  // Chat Section Styles
  chatSection: {
    padding: '5rem 2rem',
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    zIndex: 5,
  },
  
  chatContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  chatSectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: '1rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  chatSectionSubtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  
  chatFeaturesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  
  chatFeatureCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  
  chatFeatureIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    display: 'block',
  },
  
  chatFeatureTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
  },
  
  chatFeatureDesc: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  
  chatPreview: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
  },
  
  chatWindow: {
    width: '100%',
    maxWidth: '600px',
    background: 'rgberta(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  
  chatHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  chatHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  
  chatAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #9333ea, #c084fc)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  
  chatGroupName: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '2px',
  },
  
  chatOnlineStatus: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.8rem',
  },
  
  chatStartBtn: {
    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  chatMessages: {
    padding: '1rem',
    height: '300px',
    overflowY: 'auto',
    background: 'rgba(0, 0, 0, 0.1)',
  },
  
  chatMessage: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1rem',
    alignItems: 'flex-start',
  },
  
  messageAvatar: {
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  
  messageContent: {
    flex: 1,
  },
  
  messageSender: {
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '3px',
  },
  
  messageText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    marginBottom: '3px',
  },
  
  messageTime: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.75rem',
  },
  
  fileMessage: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    display: 'inline-block',
    fontSize: '0.85rem',
  },
  
  fileSize: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginLeft: '0.5rem',
    fontSize: '0.75rem',
  },
  
  chatInput: {
    display: 'flex',
    padding: '1rem',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  messageInput: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '0.75rem 1rem',
    color: 'white',
    fontSize: '0.9rem',
    outline: 'none',
  },
  
  sendButton: {
    background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
};

// Add keyframe animations through a style element
const keyframeStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(1deg); }
    66% { transform: translateY(-10px) rotate(-1deg); }
  }
  
  @keyframes floatIcon {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 0.1; }
    90% { opacity: 0.1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
  }
  
  @media (max-width: 768px) {
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .navbar {
      padding: 1rem !important;
    }
    
    .hero {
      padding: 2rem 1rem !important;
    }
    
    .features-section {
      padding: 3rem 1rem !important;
    }
  }
`;

const HomePage = ({ user = null, setUser = () => {} } = {}) => {
  const handleLoginLogout = () => {
    if (user) {
      setUser(null);
    } else {
      mockNavigate("/login");
    }
  };

  const goToComplaints = () => mockNavigate("/post-a-complaint");
  const goToPermissions = () => mockNavigate("/permissions");
  const goToLetter = () => mockNavigate("/Letter");
  const goToDashboard = () => mockNavigate("/AnalyticsDashboard");
  const goToTelegramBot = () => {
    window.open("https://t.me/CampusCare_1309_bot", "_blank");
  };
  const goToQRGenerator = () => mockNavigate("/qr-generator");

  return (
    <>
      <style>{keyframeStyles}</style>
      <div style={styles.container}>
        {/* Animated Background */}
        <div style={styles.backgroundAnimation}></div>
        
        {/* Floating Background Icons */}
        <div style={styles.floatingIcons}>
          {floatingIcons.map((icon, index) => (
            <span
              key={index}
              style={{
                ...styles.floatingIcon,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🌐</span>
            CampusCare
          </div>
          <div style={styles.navRight}>
            {user && (
              <div style={styles.profileIcon}>
                👤 {user.name}
              </div>
            )}
            <button 
              style={styles.btnLogin} 
              onClick={handleLoginLogout}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.3)";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Turn campus management into
              <br />
              <span style={styles.heroTitleAccent}>seamless tasks.</span>
              <span style={styles.heroTitleHighlight}> Instantly.</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Manage your campus operations and actions in one
              <br />
              seamless platform — powered by AI and workflow automation.
            </p>
            <div style={styles.heroButtons} className="hero-buttons">
              <button 
                style={styles.btnHeroPrimary} 
                onClick={goToComplaints}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-2px) scale(1.02)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0) scale(1)"}
              >
                Get Started
              </button>
              <button 
                style={styles.btnHeroSecondary} 
                onClick={goToDashboard}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                View Dashboard
              </button>
            </div>
          </div>

          {/* Feature Cards in Hero */}
          <div style={styles.heroCards}>
            <div 
              style={styles.heroCard} 
              onClick={goToComplaints}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(147, 51, 234, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={styles.heroCardIcon}>
                <img src={complaintImg} alt="Complaint" style={styles.cardImage} />
              </div>
              <div style={styles.heroCardContent}>
                <h3 style={styles.heroCardTitle}>Digital Complaints</h3>
                <p style={styles.heroCardDesc}>Submit and track complaints with ease</p>
              </div>
            </div>

            <div 
              style={styles.heroCard} 
              onClick={goToPermissions}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(59, 130, 246, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={styles.heroCardIcon}>
                <img src={permissionImg} alt="Permission" style={styles.cardImage} />
              </div>
              <div style={styles.heroCardContent}>
                <h3 style={styles.heroCardTitle}>Smart Permissions</h3>
                <p style={styles.heroCardDesc}>Automated approval workflows and tracking</p>
              </div>
            </div>

            <div 
              style={styles.heroCard} 
              onClick={goToLetter}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(236, 72, 153, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={styles.heroCardIcon}>
                <img src={letterImg} alt="Letter" style={styles.cardImage} />
              </div>
              <div style={styles.heroCardContent}>
                <h3 style={styles.heroCardTitle}>Instant Letter Generation</h3>
                <p style={styles.heroCardDesc}>Generate formal letters with AI automation</p>
              </div>
            </div>

            <div 
              style={styles.heroCard} 
              onClick={goToTelegramBot}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 136, 204, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={styles.heroCardIcon}>
                <img src={telegramImg} alt="Telegram Bot" style={styles.cardImage} />
              </div>
              <div style={styles.heroCardContent}>
                <h3 style={styles.heroCardTitle}>Telegram Bot</h3>
                <p style={styles.heroCardDesc}>Access campus services through Telegram messaging</p>
              </div>
            </div>

            <div 
              style={styles.heroCard} 
              onClick={goToQRGenerator}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 193, 7, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={styles.heroCardIcon}>
                <img src={qrCodeImg} alt="QR Code Generator" style={styles.cardImage} />
              </div>
              <div style={styles.heroCardContent}>
                <h3 style={styles.heroCardTitle}>QR Code </h3>
                <p style={styles.heroCardDesc}>Create custom QR codes for events, documents, and more</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.featuresSection} className="features-section">
          <div style={styles.featuresContainer}>
            <h2 style={styles.featuresTitle}>Powerful Features</h2>
            <div style={styles.featuresGrid}>
              <div 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(147, 51, 234, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={complaintImg} alt="Complaint" style={styles.featureImage} />
                <h3 style={styles.featureCardTitle}>Digital Complaint System</h3>
                <p style={styles.featureCardDesc}>
                  Submit complaints digitally with images, descriptions, and proofs for faster resolution. Track status in real-time and get automated updates.
                </p>
              </div>
              
              <div 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(59, 130, 246, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={permissionImg} alt="Permission" style={styles.featureImage} />
                <h3 style={styles.featureCardTitle}>Smart Permission Management</h3>
                <p style={styles.featureCardDesc}>
                  Streamline permission requests with intelligent routing, automated approvals, and real-time status tracking for all stakeholders.
                </p>
              </div>
              
              <div 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={letterImg} alt="Letter" style={styles.featureImage} />
                <h3 style={styles.featureCardTitle}>AI-Powered Letter Generation</h3>
                <p style={styles.featureCardDesc}>
                  Generate professional letters, certificates, and documents instantly using AI. Customize templates and maintain consistent formatting.
                </p>
              </div>
              
              <div 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(34, 197, 94, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={dashboardImg} alt="Dashboard" style={styles.featureImage} />
                <h3 style={styles.featureCardTitle}>Analytics Dashboard</h3>
                <p style={styles.featureCardDesc}>
                  Comprehensive insights and analytics to track campus operations, monitor trends, and make data-driven decisions for better management.
                </p>
              </div>

              <div 
                style={styles.featureCard}
                onClick={goToTelegramBot}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 136, 204, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={telegramImg} alt="Telegram Bot" style={styles.featureImage} />
                <h3 style={styles.featureCardTitle}>Telegram Bot Integration</h3>
                <p style={styles.featureCardDesc}>
                  Access campus services directly through Telegram. Submit complaints, request permissions, 
                  and get updates through convenient messaging interface with 24/7 availability.
                </p>
              </div>

              <div 
                style={styles.featureCard}
                onClick={goToQRGenerator}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(255, 193, 7, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={qrCodeImg} alt="QR Code Generator" style={styles.featureImage} />
                <h3 style={styles.featureCardTitle}>QR Code</h3>
                <p style={styles.featureCardDesc}>
                  Create custom QR codes for events, documents, resources, and more. 
                  Share information quickly and efficiently across campus with scannable codes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerLinks}>
              <span 
                style={styles.footerLink}
                onClick={() => mockNavigate("/about")}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
              >
                About
              </span>
              <span 
                style={styles.footerLink}
                onClick={() => mockNavigate("/contact")}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
              >
                Contact
              </span>
              <span 
                style={styles.footerLink}
                onClick={() => mockNavigate("/privacy")}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
              >
                Privacy
              </span>
              <span 
                style={styles.footerLink}
                onClick={() => mockNavigate("/support")}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
              >
                Support
              </span>
            </div>
            <p style={styles.footerText}>
              Transforming campus management with intelligent automation
            </p>
            <div style={styles.copyright}>
              © 2025 CampusCare. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;