<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->words(rand(3, 6), true),
            'description' => rand(0, 1) ? $this->faker->sentence : null,
            'order' => 0,
            'user_id' => '1',
            'status_id' => '1'
        ];
    }
}


