<?php

namespace Database\Seeders;

use App\Models\ChatRoom;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChatRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('chat_romms')
        $chatroom1 = new ChatRoom;
        $chatroom1->name = 'General';
        $chatroom1->save();

        $chatroom2 = new ChatRoom;
        $chatroom2->name = 'Tech Talk';
        $chatroom2->save();
    }
}
