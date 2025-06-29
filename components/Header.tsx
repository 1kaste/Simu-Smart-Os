
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icons } from './icons';
import Button from './ui/Button';
import Input from './ui/Input';
import ThemeToggleButton from '../src/components/ThemeToggleButton';
import { useCart } from '../src/contexts/CartContext';
import { useAuth } from '../src/contexts/AuthContext';

const Header: React.FC = () => {
    const { cartCount } = useCart();
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-primary-dark/80 dark:border-gray-800">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-2">
                    <Icons.Store className="h-6 w-6 text-primary-dark dark:text-white" />
                    <span className="font-bold text-lg text-primary-dark dark:text-white">SimuSmart</span>
                </Link>
                <div className="flex-1 px-8 lg:px-20">
                    <form onSubmit={handleSearchSubmit} className="relative">
                        <Input
                            type="search"
                            placeholder="Semantic Search for products..."
                            className="w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggleButton />
                    <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-primary-dark dark:text-gray-300 dark:hover:text-white hidden md:block">
                        Contact
                    </Link>
                    {isAuthenticated ? (
                         <Button variant="ghost" size="sm" onClick={handleLogout}>
                            <Icons.LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    ) : (
                        <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-primary-dark dark:text-gray-300 dark:hover:text-white">
                            Login
                        </Link>
                    )}
                    <Button asChild variant="accent" size="sm" className="relative">
                        <Link to="/cart">
                            <Icons.ShoppingCart className="mr-2 h-4 w-4" />
                            My Cart
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
