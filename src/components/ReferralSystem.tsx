import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';
import toast from 'react-hot-toast';

export default function ReferralSystem() {
  const [referralCode] = useState('LOAN2024');
  const shareUrl = window.location.href;

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success('Referral code copied!');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Share2 className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">Refer & Earn</h3>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
          <div className="flex gap-2">
            <code className="flex-1 bg-white px-4 py-2 rounded border border-gray-200 font-mono text-lg">
              {referralCode}
            </code>
            <button
              onClick={copyReferralCode}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-4">Share with friends</p>
          <div className="flex gap-4">
            <FacebookShareButton url={shareUrl}>
              <div className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                FB
              </div>
            </FacebookShareButton>
            
            <TwitterShareButton url={shareUrl}>
              <div className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                X
              </div>
            </TwitterShareButton>
            
            <WhatsappShareButton url={shareUrl}>
              <div className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                WA
              </div>
            </WhatsappShareButton>
            
            <LinkedinShareButton url={shareUrl}>
              <div className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                IN
              </div>
            </LinkedinShareButton>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">How it works</h4>
          <ul className="text-sm text-blue-600 space-y-2">
            <li>1. Share your referral code with friends</li>
            <li>2. They get ₹500 off on loan processing</li>
            <li>3. You earn ₹1000 for each successful referral</li>
          </ul>
        </div>
      </div>
    </div>
  );
}